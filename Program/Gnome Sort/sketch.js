let values = [];
let w = 6;
let states = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    states[i] = -1;
  }
  gnomeSort(values)
}

async function gnomeSort(arr) {
  async function moveBack(i) {
    for (; i > 0 && arr[i - 1] > arr[i]; i--) {
      states[i] = 0;
      await swap(arr, i);
      states[i] = 1;
    }
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i])
      await moveBack(i);
  }
  return arr;
}





function draw() {
  background(0);

  for (let i = 0; i < values.length; i++) {
    noStroke();
    if (states[i] == 0) {
      fill('#E0777D');
    } else if (states[i] == 1) {
      fill('#D6FFB7');
    } else {
      fill(255);
    }
    rect(i * w, height - values[i], w, values[i]);
  }
}

async function swap(arr, i) {
  await sleep(10);
  var t = arr[i];
  arr[i] = arr[i - 1];
  arr[i - 1] = t;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
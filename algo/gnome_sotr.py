def gnomeSort( arr, n): 
    index = 0
    while index < n: 
        if index == 0: 
            index = index + 1
        if arr[index] >= arr[index - 1]: 
            index = index + 1
        else: 
            arr[index], arr[index-1] = arr[index-1], arr[index] 
            index = index - 1
  
    return arr 

#test array
#arr = [1,6,9,2,3,8,7,4,5,10]
#n = len(arr) 
#arr = gnomeSort(arr, n) 
#print "out here: ", 
#for i in arr: 
#    print i, 

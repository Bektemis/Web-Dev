a, b, c, d = input().split()

def findMin(a, b, c, d):
    arr = [a, b, c, d]
    arr.sort()
    return arr[0]
 
print(findMin(a, b, c, d))
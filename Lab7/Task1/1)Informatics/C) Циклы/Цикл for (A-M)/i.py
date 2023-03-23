import math
x = int(input())
a = int()

for i in range(1, x+1):
    if(x % i == 0):
        a = a+1
print(a)
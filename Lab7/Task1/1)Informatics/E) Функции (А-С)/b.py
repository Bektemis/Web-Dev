a, n = input().split()
def power(a, n):
    s = 1
    for i in range(0, n):
        s = s * a
    return s    
print(power(int(a), int(n)))
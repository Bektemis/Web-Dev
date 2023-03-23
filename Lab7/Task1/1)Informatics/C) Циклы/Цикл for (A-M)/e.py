x = int(input())
sum = 0
for i in range(0, x+1):
    sum = sum + x % 10
    x = x // 10
print(sum)
a = input().split()
max = 0

for i in range(1, len(a)):
    if int(a[i]) > int(a[max]):
        max = i
print(a[max], max)
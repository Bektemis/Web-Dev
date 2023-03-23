n = input().split()

for i in range(1, len(n)):
    if n[i - 1] < n[i]:
        print(n[i], end = ' ')
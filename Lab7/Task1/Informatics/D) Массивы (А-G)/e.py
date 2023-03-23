n = input().split()

for i in range(1, len(n)):
    if int(n[i - 1]) * int(n[i]) > 0:
        print(n[i - 1], n[i])
        break
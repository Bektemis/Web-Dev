n = input().split()
cnt = 0
for i in range(1, len(n) - 1):
    if (int(n[i]) > int(n[i-1]) and int(n[i]) > int(n[i+1])):
        cnt += 1

print(cnt)
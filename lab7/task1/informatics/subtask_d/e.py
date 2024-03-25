n = int(input())
a = list(map(int, input().split()))
flag = False
for i in range(1, len(a)):
    if a[i - 1] > 0 and a[i] > 0 or a[i - 1] < 0 and a[i] < 0:
        flag = True
        break
print("YES" if flag else "NO")
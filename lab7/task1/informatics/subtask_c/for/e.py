import math

a = int(input())
n = int(input())
sum = 0
for i in range(0, n + 1):
    sum += math.pow(a, i)
print(int(sum))
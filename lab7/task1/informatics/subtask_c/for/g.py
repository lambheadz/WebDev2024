n = int(input())
sum = 0
sign = 1
for i in range(n + 1):
    sum += sign * 1 / (2 * i + 1)
    sign *= -1
print(4 * sum)
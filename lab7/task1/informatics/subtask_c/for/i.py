def factorial(t):
    prod = 1
    for i in range(1, t + 1):
        prod *= i
    return prod
n = int(input())
sum = 0
for i in range(n + 1):
    sum += 1 / factorial(i)
print(sum)
n = int(input())
k = int(input())
def factorial(t):
    prod = 1
    for i in range(1, t + 1):
        prod *= i
    return prod
c = factorial(n) / factorial(k) / factorial(n - k)
print(int(c))
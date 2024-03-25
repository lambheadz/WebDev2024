import math

def power(a, n):
    print(math.pow(a, n))
a, n = list(map(int, input().split()))
power(a, n)
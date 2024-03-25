n = int(input())
fib_n1 = 1
fib_n2 = 1
i = 0
while i < n - 2:
    fib_sum = fib_n1 + fib_n2
    fib_n1 = fib_n2
    fib_n2 = fib_sum
    i += 1
print(fib_n2)
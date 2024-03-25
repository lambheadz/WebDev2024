def xor(x, y):
    if (x == 1 and y != 1) or (x != 1 and y == 1):
        print(1)
    else:
        print(0)
x, y = list(map(int, input().split()))
xor(x, y)
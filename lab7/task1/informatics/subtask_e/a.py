# a = int(input())
# b = int(input())
# c = int(input())
# d = int(input())
# smallest = min(d, (min(c, min(a, b))))
# print(smallest)
def find_smallest(a, b, c, d):
    if a <= b and a <= c and a <= d:
        print(a)
    elif b <= a and b <= c and b <= d:
        print(b)
    elif c <= a and c <= b and c <= d:
        print(c)
    else:
        print(d)
a, b, c, d = list(map(int, input().split()))
find_smallest(a, b, c, d)
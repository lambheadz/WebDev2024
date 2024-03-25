# Basic Data Tyoes: Find The Runner Up Score
if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    mx = max(arr)
    sc = None

    for i in arr:
        if i == mx:
            pass
        elif sc == None:
            sc = i
        elif i > sc:
            sc = i

    print(sc)
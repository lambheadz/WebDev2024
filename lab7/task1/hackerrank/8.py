# Find THe Percentage
from functools import reduce

if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    marks = student_marks[query_name]
    sum_marks = reduce(lambda x, y: x + y, marks, 0)
    avg_marks = sum_marks/len(marks)
    print("{:.2f}".format(avg_marks))
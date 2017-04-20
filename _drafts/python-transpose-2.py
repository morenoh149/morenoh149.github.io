def transpose(A):
    B = []
    height = len(A)
    width = len(A[0])
    for i in range(width):
        B.append([])
    for i in range(height):
        for j in range(width):
            B[j].append(A[i][j])
    return B

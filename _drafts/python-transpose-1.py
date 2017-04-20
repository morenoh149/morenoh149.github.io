def transpose(A):
    return [[A[i][j] for i in range(len(A))] for j in range(len(A[0]))]

from unittest import TestCase

class TestLinearAlgebra(TestCase):
    def test_transpose(self):
        A = [[1, 2, 3], [4, 5, 6]]
        actual = transpose(A)
        expected = [[1, 4], [2, 5], [3, 6]]
        self.assertEqual(actual, expected)
        print('testing transpose')

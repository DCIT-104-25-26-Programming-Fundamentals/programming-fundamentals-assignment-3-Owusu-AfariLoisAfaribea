// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');
function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transposed = [];
    for (let i = 0; i < cols; i++) {
        transposed[i] = [];
        for (let j = 0; j < rows; j++) {
            transposed[i][j] = matrix[j][i];
        }
    }
    return transposed;
}
function addMatrices(matrixA, matrixB) {
    let rows = matrixA.length;
    let cols = matrixA[0].length;
    let sumMatrix = [];
    for (let i = 0; i < rows; i++) {
        sumMatrix[i] = [];
        for (let j = 0; j < cols; j++) {
            sumMatrix[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }
    return sumMatrix;
}
function multiplyMatrices(matrixA, matrixB) {
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;
    let rowsB = matrixB.length;
    let colsB = matrixB[0].length;
    let productMatrix = [];
    for (let i = 0; i < rowsA; i++) {
        productMatrix[i] = [];
        for (let j = 0; j < colsB; j++) {
            productMatrix[i][j] = 0;
            for (let k = 0; k < colsA; k++) {
                productMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return productMatrix;
}
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}
function readMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question(`Enter row ${i + 1}: `);
        matrix[i] = row.split(' ').map(Number);
    }
    return matrix;
}
function main() {
    console.log("Part A: Transpose a Matrix");
    let rowsA = parseInt(readlineSync.question("Enter number of rows: "));
    let colsA = parseInt(readlineSync.question("Enter number of columns: "));
    let matrixA = readMatrix(rowsA, colsA);
    console.log("Original Matrix:");
    displayMatrix(matrixA);
    console.log("Transposed Matrix:");
    displayMatrix(transposeMatrix(matrixA));
console.log("Part B: Add Two Matrices");
let rowsB = parseInt(readlineSync.question("Enter number of rows: "));
let colsB = parseInt(readlineSync.question("Enter number of columns: "));
let matrixB1 = readMatrix(rowsB, colsB);
let matrixB2 = readMatrix(rowsB, colsB);
console.log("Matrix A:");
displayMatrix(matrixB1);
console.log("Matrix B:");
displayMatrix(matrixB2);
console.log("Sum of Matrices:");
displayMatrix(addMatrices(matrixB1, matrixB2));
console.log("Part C: Multiply Two Matrices");
let rowsC = parseInt(readlineSync.question("Enter number of rows for matrix A: "));
let colsC = parseInt(readlineSync.question("Enter number of columns for matrix A: "));
let matrixC1 = readMatrix(rowsC, colsC);
let rowsD = parseInt(readlineSync.question("Enter number of rows for matrix B: "));
let colsD = parseInt(readlineSync.question("Enter number of columns for matrix B: "));
if (colsC !== rowsD) {
    console.log("Error: Number of columns in matrix A must equal number of rows in matrix B.");
    return;
}
let matrixC2 = readMatrix(rowsD, colsD);
console.log("Matrix A:");
displayMatrix(matrixC1);
console.log("Matrix B:");
displayMatrix(matrixC2);
console.log("Product of Matrices:");
displayMatrix(multiplyMatrices(matrixC1, matrixC2));
}
main();

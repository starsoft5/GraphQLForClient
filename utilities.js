// utilities.js
function matrixMake(rows, cols, val) {
    let result = [];  // avoid new Array()
    for (let i = 0; i < rows; ++i) {
        result[i] = [];
        for (let j = 0; j < cols; ++j) {
            result[i][j] = val;
        }
    }
    return result;
}

function matrixPrint(m, dec) {
    let rows = m.length; let cols = m[0].length;
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            process.stdout.write(m[i][j].toFixed(dec));
            process.stdout.write("  ");
        }
        console.log("");
    }
}

function hello() {
    console.log('Hello World !!!')
}

// --------------------------------------------------

module.exports = {
    matrixMake,
    matrixPrint,
    hello
};
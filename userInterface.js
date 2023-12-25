
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getUserInput(question) {
    return new Promise(resolve => {
        rl.question(question, answer => {
            resolve(answer);
        });
    });
}

function displayResult(result) {
    console.log(result);
}

module.exports = { getUserInput, displayResult };

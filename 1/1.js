const fs = require('fs').promises;

const readFile = async () => {
    const data = (await fs.readFile('input.txt', 'utf8')).toString().split('\n');
    
    return data;
}

const isNumber = (singleCharacter) => {
    return (singleCharacter >= '0' && singleCharacter <= '9');
}

const runMainFunc = (array) => {
    let grandTotal = 0;
    for(let line = 0; line < array.length; line++) {
        let currentLine = array[line];
        let firstNumber = '';
        let lastNumber = '';
        for(let i = 0; i < currentLine.length; i++) {
            if (isNumber(currentLine[i])) {
                if (firstNumber === '') {
                    firstNumber = currentLine[i];
                } else {
                    lastNumber = currentLine[i];
                }
            }
        }
        if (lastNumber === '') {
            lastNumber = firstNumber;
        }
        grandTotal += Number(firstNumber+lastNumber);
    }
    console.log(grandTotal);

    return grandTotal;
}

readFile().then(data => runMainFunc(data));









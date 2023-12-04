const fs = require('fs').promises;

const readFile = async () => {
    const data = (await fs.readFile('input.txt', 'utf8')).toString().split('\n');
    
    return data;
}

const isNumber = (singleCharacter) => {
    return (singleCharacter >= '0' && singleCharacter <= '9');
}

const numberTokens = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];


const runMainFunc = (array) => {
    let grandTotal = 0;
    for(let line = 0; line < array.length; line++) {
        let currentLine = array[line];
        let numbers = [];
        for(let i = 0; i < currentLine.length; i++) {
            if(isNumber(currentLine[i])) {
                numbers.push(String(currentLine[i]));
                continue;
            }
            numberTokens.forEach((value, index) => {
                if (value.length + i > currentLine.length) {
                    return;
                }
                if (currentLine.substring(i, value.length + i) === value) {
                    numbers.push(String(index + 1));
                    return;
                }
            });

        }
        
        let sum = Number(numbers.at(0) + numbers.at(-1));
        console.log(sum);
        grandTotal += sum;
    }    
    
    console.log(grandTotal);

    return grandTotal;
}

readFile().then(data => runMainFunc(data));









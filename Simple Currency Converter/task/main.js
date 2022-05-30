const input = require('sync-input');
let currencies;
currencies = ["USD", "JPY", "EUR", "RUB", "GBP"];
let converts;
converts = [1.0, 113.5, 0.89, 74.36, 0.75];
let answer = "";
let fromIndex = 0;
let toIndex = 0;
let converter = 0;
let amount = 0;
let fromConvert = " ";
let toConvert = " ";
let convertedAmount = 0;

console.log("Welcome to Currency Converter!");
console.log("1 USD equals  1 USD");
console.log("1 USD equals  113.5 JPY");
console.log("1 USD equals  0.89 EUR");
console.log("1 USD equals  74.36 RUB");
console.log("1 USD equals  0.75 GBP");

do {
    console.log('What do you want to do?');
    console.log('1-Convert currencies 2-Exit program');
    answer = input();

    //console.log(answer);

    if ( answer === "1" ) {

        console.log("What do you want to convert?");

        fromConvert = input("From: ");
        fromConvert = fromConvert.toUpperCase();
        if (currencies.includes(fromConvert)) {
            toConvert = input("To: ");
            toConvert = toConvert.toUpperCase();

            if (currencies.includes(toConvert)) {
                amount = Number(input("Amount: "));
                if (!isNaN(amount)) {
                    if (amount > 0) {
                        fromIndex = currencies.findIndex(element => element === fromConvert);
                        toIndex = currencies.findIndex(element => element === toConvert);
                        converter = converts[toIndex] / converts[fromIndex];
                        console.log(fromConvert, fromIndex, converts[fromIndex],
                            toConvert, toIndex, converts[toIndex],
                            amount, converter);
                        convertedAmount = amount * converter;
                        convertedAmount = convertedAmount.toFixed(4);
                        console.log('Result:', amount, fromConvert, 'equals', convertedAmount, toConvert);
                    } else {
                        console.log('The amount can not be less than 1');
                    }
                } else {
                    console.log('The amount has to be a number');
                }
            } else {
                console.log('Unknown currency');
            }
        } else {
            console.log('Unknown currency');
        }
    } else {
        if (answer === '2') {
            console.log("Have a nice day!");
        } else {
            console.log("Unknown input");
        }
    }
} while ( answer !== '2');

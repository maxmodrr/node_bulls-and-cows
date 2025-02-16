'use strict';

// const terminal = readline.createInterface(process.stdin, process.stdout);
// const randNum = Math.floor(Math.random() * (9999 - 999) + 1000);

// function askQuestion() {
//   // console.log(randNum);

//   terminal.question('Write a number a 4-digit number: ', (num) => {
//     if (isNaN(num)) {
//       // console.log('You have to write digits, idiot\n');
//       return false;
//     } else if (num.toString().length !== 4) {
//       // console.log('You have to write 4 different digits!! 4! \n');
//       askQuestion();
//     } else {
//       const { isRight } = checkNumber(num);

//       if (isRight) {
//         // console.log(`You win! The number is ${randNum}`);
//         terminal.close();
//       } else {
//
//         askQuestion();
//       }
//     }
//   });
// }

// function checkNumber(num) {
//   let bulls = 0;
//   let cows = 0;
//   const strRand = randNum.toString();

//   for (let i = 0; i < 4; i++) {
//     if (strRand[i] === num[i]) {
//       bulls++;
//     } else if (strRand.includes(num[i])) {
//       cows++;
//     }
//   }

//   return { bulls, cows, isRight: bulls === 4 };
// }

// askQuestion();

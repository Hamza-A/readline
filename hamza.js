const readline = require('readline');
const fetch = require('node-fetch');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const b = 'b';
function line(nine){
    console.log(9);
}


// reader.question("What is your name? ", (name) => {
//   console.log(`Hello ${name}!`);
//
//   reader.close();
// })

// function greet(userInput){
//   let message;
//   reader.question(message, greet)
//   console.log("you feel " + userInput)
//
//   reader.close();
// }

const branch = 'develop';
const master = 'toto';
const body = {
  grant_type : 'password',
  username : 'ogea2',
  password : 'Q7mxn@XS$Y',
  scope : 'openid profile'
};

function call(){
  fetch('https://preprod.idpdecathlon.oxylane.com/as/token.oauth2', {
    method: 'post',
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic b2dlYTo2OVdGZGF0SVFNOUlXa1RQZlc4dnBzSmxFVXNGRUlXNDl5cUlYS1RkT3k4WFdZSWsxTnFBT1k3SVFTSXA5bGRm'
   },
    body:    JSON.stringify(body),
  })
    .then(res => res.json())
    .then(body => JSON.parse(body))
    .then(modulr => console.log(modulr));
}

function randomlyAdded(){
    console.log('random');
}


// function ask(){
// reader.question("How do you feel? ", greet);
//   function greet(userInput){
//     switch (userInput) {
//       case "good":
//         console.log("Great Hamza, keep your energie!");
//         break;
//       case "bad":
//         console.log("What's going wrong?");
//         break;
//       case "happy":
//         console.log("Wonderful! It's going to be a great day!");
//         break;
//       default:
//         console.log("Try to give me an available answer");
//         break;
//
//     }
//     return reader.question("Would you like to give another answer?", answer);
//   }
//
// }
//
// function answer(input){
//   input === "yes"? ask()
//   : reader.close();
// }

// ask();

call();





// function calculator(table){
//   return table.map(x => x * 2);
// }
//
// console.log(calculator([1, 2, 3, 4, 5]));
//
// const items = ["item1", "item2", "item3"]
// let copie = [];
//
// items.forEach(function(item){
//   console.log(copie.push(item));
//
// });
//
// const items2 = ["item1", "item2", "item3"];
// let copie2 = [];
//
// for (let i = 0; i < items2.length; i++) {
//   console.log(copie2.push(items2[i]));
// }

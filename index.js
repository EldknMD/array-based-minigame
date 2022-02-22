// Array based pseudorandom
var Array1 = [1, 1, 1, 2];  //75% win/lose rate
var Array2 = [1, 1, 2];     //~ 66.6% win/lose rate
var Array3 = [1, 2];        // 50% win/lose rate
var Array4 = [2];           // 0% win/lose rate. Secure lost round at the end of game.
// Declaring boolean Pass# variables for conditional code execution
var Pass1 = false
var Pass2 = false
var Pass3 = false

function rar (array) { // rar = Random Array Result
    var randomArraySelector = Math.floor(Math.random() * array.length);
    var finalResult = array[randomArraySelector];
      return finalResult
    };

function await(message, delayTimeInMiliSeconds) { // Delay time for text.
    setTimeout(() => {
    console.log(message)
        }, delayTimeInMiliSeconds);
};
var rarResult1 = rar(Array1);
var rarResult2 = rar(Array2);
var rarResult3= rar(Array3);
var rarResult4 = rar(Array4);


console.log(rarResult1);
console.log(rarResult2);
console.log(rarResult3);
console.log(rarResult4);  //Console logging all rar() results to check for possible errors

 // 1st round
 switch (rarResult1) {
    case 1:
    await("1st round: Win. Next round incoming...", 3000);
    var Pass1 = true; //Pass1 bolean var is true only if you get 1 from the array, allowing the next round to continue.
    break; 

    case 2:
    await("1st round: Lose. Better luck next time...", 3000); // Game over if you get a 2 from the array. 
   break;

  default:
    console.log("1st round default. Something went wrong.");
  break;
 };

// second round
if (Pass1 === true) {
switch (rarResult2) {
    case 1:
    await("2nd round: Win. Next round incoming...", 6000);
    var Pass2 = true;
    break;

    case 2:
    await("2nd round: Lose. Better luck next time...", 6000);
    break;

  default:
console.log("2nd round default. Something went wrong.")
}};

//  3rd round
if(Pass2 === true) {
switch (rarResult3) {
    case 1:
    await("3rd round: Win. Next round incoming...", 9000)
    var Pass3 = true
    break;

    case 2:
    await("3rd round: Lose. Better luck next time...", 9000)
    break;

  default:
    console.log("3rd round default. Something went wrong.")
    break;
}};

  // Fourth round
if (Pass3 === true) {
switch (rarResult4) {
    case 1:
      await("4th round win: Impresive! But... you're not suposed to win this...", 12000)
    break;

    case 2:
      await("4th round lose: well... You reached the last round. Congratulations.", 12000)
    break;

    default:
      console.log("4th round default: Something went REALLY wrong.")
    break;}
};

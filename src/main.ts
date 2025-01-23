function impNum(): number {
  let cislo: number;
  do {
      cislo = Number(window.prompt("Zadej číslo"));
  } while (Number.isNaN(cislo));
  return cislo;
}
function randInt(min: number, max: number): number {
  return min + Math.round(Math.random() * (max - min));
}
let a:number = 1;
console.log("start");

for (let i:number = 0; i<5000000000/2; i++){
  a++;
}

console.log("další");


let userInput:number = 0;
let correctGuess:boolean = false;
let min:number = 1;
let max:number = 99;
let Pokusy:number = 1;

userInput = impNum();
while(!correctGuess && userInput != 999) {
  let randomNumber:number = randInt(min, max);
  console.log(randomNumber);
  if(randomNumber < userInput){
    min = randomNumber + 1;
    Pokusy += 1;
    console.log("Zadané číslo je větší, zkus to znovu :)");
    for (let i:number = 0; i<5000000000/2; i++){
      a++;
    }
  } else if(randomNumber > userInput){
    max = randomNumber - 1;
    Pokusy += 1;
    console.log("Zadané číslo je menší, zkus to znovu :)");
    for (let i:number = 0; i<5000000000/2; i++){
      a++;
    }
  } else {
    correctGuess = true;
    min = 1;
    max = 99;
    console.log("Počítač uhádl tvé číslo na",Pokusy,"pokusů");
  }

  }

//console.log("Hádané číslo je větší, zkus to znovu :)");

//console.log("Hádané číslo je menší, zkus to znovu :)");

//console.log("Uhodl/a jsi, dobrá práce :D");


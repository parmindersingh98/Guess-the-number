let minNumber = 1;
let maxNumber = 100;
let guess;
let number = document.querySelector(".number");
let btn = document.querySelector(".btn");
let reset = document.querySelector(".reset");
let message = document.querySelector(".message");
let answer = document.querySelector(".answer");
let attempts_count = document.querySelector(".attempts_count");
let counter = 0;

let randomNumber =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

btn.addEventListener("click", function () {
  console.log(randomNumber);
  guess = number.value;

  if (guess == "") {
    message.textContent = "try with a number.";
  } else if (guess > randomNumber) {
    message.textContent = `The number is lower than ${guess}`;
    number.value = "";
    counter++;
    attempts_count.textContent = counter;
  } else if (guess < randomNumber) {
    message.textContent = `The number is higher than ${guess}`;
    number.value = "";
    counter++;
    attempts_count.textContent = counter;
  } else {
    message.textContent = "You Guessed it! 😁";
    answer.textContent = randomNumber;
    number.value = "";
    attempts_count.textContent = counter;
    counter = 0;
    setInterval(function(){
        location.reload();        
    }, 7000);

  }
});

reset.addEventListener("click", function () {
  location.reload();
});

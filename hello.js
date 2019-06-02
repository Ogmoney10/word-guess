var wordChoices = ["calf", "cub", "pup", "hatchling", "chick", "piglet", "fry", "gosling", "baby", "infant", "larva", "kitten", "fawn", "foal", "puggle"];

//defines the global variables
var wins = 0;
var losses = 0;
var lettersGuessed = [];

//computer chooses a random letter
var computerChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)];
//Test to see the computer choice
console.log("Correct Word: " + computerChoice);

var splitWord = [];   //the split word shown as each letter
for (var letter of computerChoice) {
    splitWord.push(letter);
};
var userGuess = userClick.key.toLowerCase();
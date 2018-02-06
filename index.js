var Word = require('./word.js')
var inquirer = require('inquirer');

wordChoice = ['javascript','html','css','node',
'jquery','firebase', 'ajax', 'mysql'];

var randomWord = wordChoice[Math.floor(Math.random()* wordChoice.length)];
var guesses = [];
var guessesLeft = 10;

var userguess = function(){

    console.log("Welcome to Programmer's Hangman!");
    console.log("Please guess a programming language");
        var newWord = new Word(randomWord);
        inquirer.prompt([
            {
                type: "input",
                message: "Please guess a letter",
                name: "letterGuess"
            }
        ]).then (function(character){
            var letterGuess = character.letterGuess;
            var guessedStatus = false;
            for (var i = 0; i < guesses.length; i++){
                if(letterGuess === guesses[i]){
                    guessedStatus = true;
                }
            } if (guessedStatus === false){
                guesses.push(letterGuess);
                var foundWord = newWord.letterCheck(letterGuess)
            
                if (foundWord === 0){
                    console.log("Incorrect Guess!");
                    console.log(newWord.showWord());
                    guessesLeft --;
                } else {
                    newWord.wordCheck();
                    newWord.showWord();
                    console.log("Correct Guess!");
                    console.log(newWord.showWord())
                }
            }
            if (guessLeft> 0 && newWord.wordFound === false){
                guessPrompt();
            } else if (new Word.wordFound === true){
                console.log("You won! Nice!");
            } else 
                console.log("You got no guesses left.");
        });
};
userguess();
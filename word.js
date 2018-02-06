var Letter = require ('./letter.js')

var Word = function(word){
    this.array = [];
    this.correctarray = [];
    this.word = word
    this.complete = false;
    Word.prototype.split = function(word){
        for (i=0, i < this.word.length, i++){
            var newLetter = new Letter(this.word[i]);
            this.letters.push(newLetter);
        } 
    }

    Word.prototype.completeWord = function(){
        if (this.array.every(function(continue){
            return continue.appear ===true;
        })) {
            this.complete = true;
            return true;
        }
    
    }

    Word.prototype.letterCheck = function (guessedlttr){
        this.letters.forEach(function(lttr){
            if(lttr.character === guessedlttr){
                lttr.appear = true
            }
        })
    }
    
    Word.prototype.showWord = function(){
        var space = '';
        this.array.forEach(function(display){
            var checkDisplay = display.check(display);
            var thisDisplay = display.revealCharacter();
            space += thisDisplay;
        })
    }
    

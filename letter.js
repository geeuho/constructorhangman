var Letter = function(character){
    this.character = character;
    this.boolean = false; 
}

Letter.prototype.print = function(){
    if(this.boolean){
        return this.character
    }else{
        return '_';
    }
}

Letter.prototype.check = function(character){
    if(character === this.character){
        this.boolean = true;
    }else
        this.boolean = false;
}

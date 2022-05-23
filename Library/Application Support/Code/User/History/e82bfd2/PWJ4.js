
const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses : [],
    myGuess : null,
    play: function() {
        this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;

        game.getGuess();
        game.render();



       
         
    },
    render : function () {
        while(this.myGuess >= this.smallestNum && this.myGuess <= this.biggestNum){
            this.getGuess();
          if(this.myGuess === this.secretNum){
               alert("Congrats! You guessed the number");
               return;
          } else if(this.myGuess > this.secretNum){
               alert("Your guess is too high");
                  
          } else if(this.myGuess < this.secretNum){
               alert("Your guess is too low");
          }
        }
      },
    getGuess : function(){ 
        this.myGuess = prompt(`Enter a guess between ${this.smallestNum}, ${this.biggestNum}`)
        this.myGuess = parseInt(this.myGuess)
        myGuess.push = prevGuesses;



    
    

        }
    }
    

console.log(game.play());










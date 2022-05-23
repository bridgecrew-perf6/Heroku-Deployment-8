
const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses : [],

    play: function() {
        game.getGuess();
        game.render();
        let myGuess = prevGuesses;



        this.secretNum = Math.floor(Math.random() * 
          (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
       
         
    },
    render : function (myGuess, secretNum) {
          if(myGuess === secretNum){
              return alert("Congrats! You guessed the number");  
          } else if(myGuess > secretNum){
              return alert("Your guess is too high");   
          } else if(myGuess < secretNum){
              return alert("Your guess is too low");
          }
            console.log(prevGuesses);
      },
    getGuess : function(myGuess){ 
    prompt(`Enter a guess between ${this.smallestNum}, ${this.biggestNum}`)

    
    while(myGuess >= this.smallestNum && myGuess <= this.biggestNum){
        return myGuess;

        }
    }
    }

console.log(game.play());










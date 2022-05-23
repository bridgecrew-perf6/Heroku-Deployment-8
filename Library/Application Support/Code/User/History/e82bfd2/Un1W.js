
const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses : [],
    myGuess : null,
    play: function() {
        game.getGuess();
        game.render();
        let myGuess = prevGuesses;



        this.secretNum = Math.floor(Math.random() * 
          (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
       
         
    },
    render : function () {
        while(this.myGuess >= this.smallestNum && this.myGuess <= this.biggestNum){
          if(this.myGuess === this.secretNum){
              return alert("Congrats! You guessed the number");  
          } else if(this.myGuess > this.secretNum){
              return alert("Your guess is too high");   
          } else if(this.myGuess < this.secretNum){
              return alert("Your guess is too low");
          }
            console.log(prevGuesses);
        }
      },
    getGuess : function(){ 
        this.myGuess = prompt(`Enter a guess between ${this.smallestNum}, ${this.biggestNum}`)
        
        parseInt

    
    

        }
    }
    

console.log(game.play());










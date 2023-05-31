//Rock Paper and Scissors game

const game = ()=> {//creating a function that holds other functions for making our code neet
    let pScore = 0;
    let cScore = 0;

    //Starting the game
    const startGame = () =>{//to go past the introduction face
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //play the match
    const playMatch = ()=> {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand"); 
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            });
        });
    
        //computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(options =>{
            options.addEventListener("click", function(){
            //This is computer choice
            const computerNumber = Math.floor(Math.random() * 3);//we used floor to approximate our random number to the closest least possible integer
            const computerChoice = computerOptions[computerNumber];
            
            //Timer for the show hands and update score
            setTimeout(()=>{
            
            //here is where we compare hands
            compareHands(this.textContent, computerChoice);
            
            //update images
            playerHand.src = `images/${this.textContent}.png`;
            computerHand.src = `images/${computerChoice}.png`;

            }, 1500);

            //animation
            playerHand.style.animation = "shakePlayer 1.5s ease";
            computerHand.style.animation = "shakeComputer 1.5s ease";

            });
        });
    };

    const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const winner = document.querySelector(".winner");
    const compareHands = (playerChoice, computerChoice) => {
        //checking for tie
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }
        //check for rock
        if(playerChoice === "rock"){
            if(computerChoice === "paper"){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
        //check for paper
        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
    };

    //call the inner functions
    startGame();
    playMatch();
};

//start the game function
game();

let playerScore = 0;
let cpuScore = 0;
let roundsPlayed = 0;
const totalRounds = 10;

const gameOutcomes =
[[tie, lose, win],
 [win, tie, lose],
 [lose, win, tie]];

 const rockPaperScissors =
["rock", "paper", "scissors"];

let messageText = "";

const msg = document.getElementById("msg");
const rockBtn = document.getElementById("rockBtn");
const rockImg = document.getElementById("rockImg");
const paperBtn = document.getElementById("paperBtn");
const paperImg = document.getElementById("paperImg");
const scissorsBtn = document.getElementById("scissorsBtn");
const scissorsImg = document.getElementById("scissorsImg");

hoverButtonAnimation(rockBtn, rockImg);
hoverButtonAnimation(paperBtn, paperImg);
hoverButtonAnimation(scissorsBtn, scissorsImg);

rockBtn.addEventListener("click", function() {
    play(0, (cpuOption()));
});
paperBtn.addEventListener("click", function(){
    play(1, cpuOption());
});
scissorsBtn.addEventListener("click", function(){
    play(2, cpuOption());
});
function hoverButtonAnimation(btn, img){
      btn.addEventListener("mouseover", () => {
        img.style.transform = "translateY(-10px)";
      });
      
      btn.addEventListener("mouseout", () => {
        img.style.transform = "translateY(0)";
      });
}

function win(){
    messageText += "\nWin!"
    message(messageText);
    playerScore++;
    messageText = "";
    
}

function lose(){
    messageText += "\nLoss..."
    message(messageText);
    cpuScore++;
    messageText = "";
}

function tie(){
    messageText += "\nTie."
    message(messageText);

    messageText = "";

}

function cpuOption(){
    return Math.floor(Math.random() * 3);
}


function play(player1Option, player2Option){
    //0 - rock, 1- paper, 2- scissors
    msg.classList.remove("messageAnimation");
    messageText += `You played ${rockPaperScissors[player1Option]}.
    Your opponent played ${rockPaperScissors[player2Option]}.`;
    gameOutcomes[player1Option][player2Option]();
    

 }

 function message(text){
    msg.textContent = text;
    msg.classList.add("messageAnimation");
    setTimeout(function() {
        msg.classList.remove("messageAnimation");
      }, 2000);
 }
let listenerEnabled = true;
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
const playerScoreBox = document.getElementById("playerScore");
const playerScoreContainer = document.getElementById("playerScoreBox");
const cpuScoreBox = document.getElementById("cpuScore");
const cpuScoreContainer = document.getElementById("cpuScoreBox");
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
    scoreUpdateAnimation(playerScoreContainer);

    messageText = "";
}

function lose(){
    messageText += "\nLoss..."
    message(messageText);
    cpuScore++;
    scoreUpdateAnimation(cpuScoreContainer);
    messageText = "";
}

function tie(){
    messageText += "\nTie."
    message(messageText);
    scoreUpdateAnimation(playerScoreContainer);
    scoreUpdateAnimation(cpuScoreContainer);
    messageText = "";

}

function cpuOption(){
    return Math.floor(Math.random() * 3);
}


function play(player1Option, player2Option){
    //0 - rock, 1- paper, 2- scissors
    if(listenerEnabled){
        msg.classList.remove("messageAnimation");
        messageText += `You played ${rockPaperScissors[player1Option]}.
        Your opponent played ${rockPaperScissors[player2Option]}.`;
        gameOutcomes[player1Option][player2Option]();
        update();
    }

 }

 function message(text){
    listenerEnabled = false;
    msg.textContent = text;
    msg.classList.add("messageAnimation");
    setTimeout(function() {
        msg.classList.remove("messageAnimation");
        listenerEnabled = true;
      }, 2000);
 }

 function scoreUpdateAnimation(container){
    container.classList.add("scoreUpdateAnimation");
    setTimeout(function() {
        container.classList.remove("scoreUpdateAnimation");
      }, 1000);
 }

 function update(){
    playerScoreBox.textContent = playerScore;
    cpuScoreBox.textContent = cpuScore;
 }
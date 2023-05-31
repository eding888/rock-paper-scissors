
let playerScore = 0;
let cpuScore = 0;
let roundsPlayed = 0;
const totalRounds = 10;

const gameOutcomes =
[[tie, lose, win],
 [win, tie, lose],
 [lose, win, tie]];


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

rockBtn.addEventListener("click", play(0, cpuOption()));
paperBtn.addEventListener("click", play(1, cpuOption()));
scissorsBtn.addEventListener("click", play(1, cpuOption()));
function hoverButtonAnimation(btn, img){
      btn.addEventListener("mouseover", () => {
        img.style.transform = "translateY(-10px)";
      });
      
      btn.addEventListener("mouseout", () => {
        img.style.transform = "translateY(0)";
      });
}

function win(){
    playerScore++;
}

function lose(){
    cpuScore++;
}

function tie(){

}

function cpuOption(){
    return Math.floor(Math.random() * 3);
}


function play(player1Option, player2Option){
    //0 - rock, 1- paper, 2- scissors
    
    gameOutcomes[player1Option][player2Option];
    
    if(roundsPlayed >= totalRounds){
        rockBtn.removeEventListener
    }
 }

 function message(text){

 }
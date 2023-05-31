
let playerScore = 0;
let cpuScore = 0;

function win(){
    playerScore++;
}

function lose(){
    cpuScore++;
}

function tie(){

}

const gameOutcomes =
[[tie, lose, win],
 [win, tie, lose],
 [lose, win, tie]];

 function play(player1Option, player2Option){
    //0 - rock, 1- paper, 2- scissors
    gameOutcomes[player1Option][player2Option];
    
 }



const rockBtn = document.getElementById("rockBtn");
const rockImg = document.getElementById("rockImg");
const paperBtn = document.getElementById("paperBtn");
const paperImg = document.getElementById("paperImg");
const scissorsBtn = document.getElementById("scissorsBtn");
const scissorsImg = document.getElementById("scissorsImg");

hoverButtonAnimation(rockBtn, rockImg);
hoverButtonAnimation(paperBtn, paperImg);
hoverButtonAnimation(scissorsBtn, scissorsImg);

function hoverButtonAnimation(btn, img){
    
      btn.addEventListener("mouseover", () => {
        img.style.transform = "translateY(-10px)";
      });
      
      btn.addEventListener("mouseout", () => {
        img.style.transform = "translateY(0)";
      });
}

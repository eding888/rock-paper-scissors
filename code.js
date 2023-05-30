
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
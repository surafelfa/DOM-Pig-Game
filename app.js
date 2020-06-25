/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 

//var score=[0,0]
var roundScore=0;
var activePlayer=0;

//document.querySelector("#current-"+activePlayer).textContent=dice;
document.querySelector(".dice").style.display="none";
document.querySelector(".winner-1").style.display="none"
document.querySelector(".winner-2").style.display="none"
document.getElementById("score-0").textContent="0";
document.getElementById("current-0").textContent="0";
document.getElementById("score-1").textContent="0";
document.getElementById("current-1").textContent="0";

document.querySelector(".btn-roll").addEventListener("click", function(){
    var dice=Math.floor(Math.random() * 6+1);
    //display the result on UI
    var diceDom=document.querySelector(".dice")
    diceDom.style.display="block";
    diceDom.src="dice-"+dice+".png";
    if(dice!==1){
        roundScore +=dice;
        document.querySelector("#current-"+activePlayer).textContent=roundScore;
        //globalScore=roundScore;
    }
    else{
        activePlayer===0?activePlayer=1:activePlayer=0;
        roundScore=0;
        document.getElementById("current-0").textContent="0"
        document.getElementById("current-1").textContent="0"

        document.querySelector(".player-0-panel").classList.toggle("active")
        document.querySelector(".player-1-panel").classList.toggle("active")
        document.querySelector(".dice").style.display="none"
    }
})
document.querySelector(".btn-hold").addEventListener("click", function(){
    var previousScore=parseInt(document.querySelector("#score-"+activePlayer).textContent) 
    document.querySelector("#score-"+activePlayer).textContent = roundScore+previousScore;
    if(previousScore+roundScore<100){
        activePlayer===0?activePlayer=1:activePlayer=0;
        roundScore=0;
        document.getElementById("current-0").textContent="0"
        document.getElementById("current-1").textContent="0"
        document.querySelector(".dice").style.display="none"
        document.querySelector(".player-0-panel").classList.toggle("active")
        document.querySelector(".player-1-panel").classList.toggle("active")
    }
    else{
        //These two button disabled as long as New Game button is not clicked
        activePlayer===0?document.querySelector(".winner-1").style.display="inline-block":document.querySelector(".winner-2").style.display="inline-block";
        document.querySelector(".btn-roll").disabled = true;
        document.querySelector(".btn-hold").disabled = true;
    }
    document.querySelector(".dice").style.display="none"    
})
document.querySelector('.btn-new').addEventListener('click',function(){
    location.reload();
})














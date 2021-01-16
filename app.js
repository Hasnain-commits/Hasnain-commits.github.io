let isGameOver = false;

const img = document.querySelector("img");
img.draggable = false;

const reset = document.querySelector("button#reset");
let max = document.querySelector("select").value;

document.querySelector("select").addEventListener("change", function() {
    max = document.querySelector("select").value;
})


const  player1 = {
    name: null,
    score: 0,
    button: document.querySelector("button#p1"),
    display: document.querySelector("#p11")
}

const  player2 = {
    name: null,
    score: 0,
    button: document.querySelector("button#p2"),
    display: document.querySelector("#p22")
}


while (player1.name === null && player2.name === null) {
    player1.name = prompt("Enter your name Player 1");
    player2.name = prompt("Enter your name Player 2");

    if (player1.name === null) {
        while (player1.name === null) {
            player1.name = prompt("Enter your name, Player 1");
        }
    }
}



function addScores (player, opponent) {
    if (!isGameOver) {
        player.score += 1;

        if (player.score == max) {
            isGameOver = true;
            player.display.style.color = "green";
            opponent.display.style.color = "red";

            player.button.disabled = true; 
            opponent.button.disabled = true; 

            player.display.innerText = player.score;
            alert(`${player.name} WON THE GAME!!!`)
        }
        
        player.display.innerText = player.score;

    } 
}



function resets(p1, p2) {
    p1.display.innerText = 0;
    p2.display.innerText = 0;

    p1.display.style.color = "black";
    p2.display.style.color = "black";

    p1.button.disabled = false; 
    p2.button.disabled = false; 
 
    p1.score = 0;
    p2.score = 0;

    isGameOver = false;

    p1.name = null;
    p2.name = null;

    while (p1.name === null && p2.name === null) {
        p1.name = prompt("Enter your name, Player 1");
        p2.name = prompt("Enter your name, Player 2");

        if (p1.name === null) {
            while (p1.name === null) {
                p1.name = prompt("Enter your name, Player 1");
            }
        }
    }
}

 

player1.button.addEventListener("click", function () {
    addScores(player1, player2);
})  


player2.button.addEventListener("click", function () {
    addScores(player2, player1);
})


reset.addEventListener("click", function() {
    resets(player1, player2);
})
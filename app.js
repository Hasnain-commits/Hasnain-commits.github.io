const p1 = document.querySelector("button#p1");
const p2 = document.querySelector("button#p2");
const reset = document.querySelector("button#reset");


const scoreP1 = document.querySelector("#p11");
const scoreP2 = document.querySelector("#p22");


let score1 = 0;
let score2 = 0;
let isGameOver = false;

let max = document.querySelector("select").value;

document.querySelector("select").addEventListener("change", function() {
    max = document.querySelector("select").value;
})
 

p1.addEventListener("click", function () {
    if (!isGameOver) {
        score1 += 1;

        if (score1 == max) {
            isGameOver = true;
            scoreP1.style.color = "green";
            scoreP2.style.color = "red";

            p1.disabled = true; 
            p2.disabled = true; 

        }
        
        scoreP1.innerText = score1;

    } 

})  


p2.addEventListener("click", function () {
    if (!isGameOver) {
        score2 += 1;

        if (score2 == max) {
            isGameOver = true;
            scoreP1.style.color = "red";
            scoreP2.style.color = "green";

            p1.disabled = true; 
            p2.disabled = true; 

        }

        scoreP2.innerText = score2;

    } 
 

})


reset.addEventListener("click", function() {
    scoreP1.innerText = 0;
    scoreP2.innerText = 0;

    p1.disabled = false; 
    p2.disabled = false; 
 
    score1 = 0;
    score2 = 0;

    scoreP2.style.color = "black";
    scoreP1.style.color = "black";

    isGameOver = false;

    
})
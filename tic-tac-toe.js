document.addEventListener("DOMContentLoaded", function() { gameFunction() });

function gameFunction() {

    document.getElementById("status").classList.remove("you-won");
    document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O.";

let cells = document.getElementById("board").children;
  var player1 = 1;
  var p1array = [];
  var p2array = [];
  console.log("X plays first")



    for(let i=0;i<cells.length;i++){
    cells[i].classList.add("square");
    cells[i].onclick = function(){
        startGame();
    }
    cells[i].addEventListener('mouseover',function(e) { e.target.classList.add('hover') });
    cells[i].addEventListener('mouseout',function(e) { e.target.classList.remove('hover') });

    const restartGame = document.getElementsByClassName("btn");
    restartGame[0].addEventListener('click', function() {
        cells[i].innerHTML = "";
        gameFunction();
    });
    
    function startGame(){

        if (player1 == 1) {
            cells[i].innerHTML = "X";
            cells[i].classList.add("X");
            player1 = 0;
            p1array.push(i);
            cells[i].onclick = false;

            if (p1array.includes(0) &&  p1array.includes(1) && p1array.includes(2) ||
                p1array.includes(3) &&  p1array.includes(4) && p1array.includes(5) || 
                p1array.includes(6) &&  p1array.includes(7) && p1array.includes(8) ||
                p1array.includes(0) &&  p1array.includes(3) && p1array.includes(6) ||
                p1array.includes(1) &&  p1array.includes(4) && p1array.includes(7) ||
                p1array.includes(2) &&  p1array.includes(5) && p1array.includes(8) ||
                p1array.includes(0) &&  p1array.includes(4) && p1array.includes(8) ||
                p1array.includes(2) &&  p1array.includes(4) && p1array.includes(6)){
                document.getElementById("status").classList.add("you-won");
                document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
            }

        } else  {
            cells[i].innerHTML = "O";
            cells[i].classList.add("O");
            player1 = 1;
            p2array.push(i);
            cells[i].onclick = false;

            if (p2array.includes(0) &&  p2array.includes(1) && p2array.includes(2) ||
                p2array.includes(3) &&  p2array.includes(4) && p2array.includes(5) || 
                p2array.includes(6) &&  p2array.includes(7) && p2array.includes(8) ||
                p2array.includes(0) &&  p2array.includes(3) && p2array.includes(6) ||
                p2array.includes(1) &&  p2array.includes(4) && p2array.includes(7) ||
                p2array.includes(2) &&  p2array.includes(5) && p2array.includes(8) ||
                p2array.includes(0) &&  p2array.includes(4) && p2array.includes(8) ||
                p2array.includes(2) &&  p2array.includes(4) && p2array.includes(6)){
                document.getElementById("status").classList.add("you-won");
                document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
        }

  }
}

}

console.log(p1array)
console.log(p2array)
}
document.addEventListener("DOMContentLoaded", function() { gameFunction() });

function gameFunction() {

let cells = document.getElementById("board").children;

var winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  var player1 = 1;
  var p1array = [];
  var p2array = [];

    for(let i=0;i<cells.length;i++){
    cells[i].classList.add("square");
    cells[i].onclick = function(){
        startGame();
    }
    cells[i].addEventListener('mouseover',function(e) { e.target.classList.add('hover') });
    cells[i].addEventListener('mouseout',function(e) { e.target.classList.remove('hover') });


    function startGame(){

        if (player1 == 1) {
            cells[i].textContent = "X";
            cells[i].classList.add("X");
            player1 = 0;
            p1array.push(i);
            cells[i].onclick = false;

            if (p1array.includes(winning_combinations[0]  || winning_combinations[1] || winning_combinations[2] || winning_combinations[2] ||
                winning_combinations[4] ||winning_combinations[5] || winning_combinations[6] ||winning_combinations[7]||winning_combinations[8])) {
                document.getElementById("status").classList.add("you-won");
                document.getElementById("status").textContent = "Congratulations! X is the Winner!";
            }

        } else{
            cells[i].textContent = "O";
            cells[i].classList.add("O");
            player1 = 1;
            p2array.push(i);
            cells[i].onclick = false;

            if (p1array.includes(winning_combinations[0]  || winning_combinations[1] || winning_combinations[2] || winning_combinations[2] ||
                winning_combinations[4] ||winning_combinations[5] || winning_combinations[6] ||winning_combinations[7]||winning_combinations[8])) {
                document.getElementById("status").classList.add("you-won");
                document.getElementById("status").textContent = "Congratulations! O is the Winner!";
        }

  }
}
const restartGame = document.getElementsByClassName("btn");
restartGame[0].addEventListener('click', function() {
    cells[i].textContent = "";
    gameFunction();
});

    }
console.log(p1array)
console.log(p2array)
}
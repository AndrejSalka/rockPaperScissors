


let scorePlayer = localStorage.getItem('scorePlayer')
let scoreBot = localStorage.getItem('scoreBot')
console.log(scoreBot++, scorePlayer++)
let roundsPlayed = '0'
let result = document.querySelector('h3')
let rockClick = document.getElementById('rock').addEventListener('click', function(){
    game('rock')
})
let paperClick = document.getElementById('paper').addEventListener('click', function(){
    game('paper')
})
let scissorsClick = document.getElementById('scissors').addEventListener('click', function(){
    game('scissors')
})

function game(playerChoice){
    const computerChoice = Math.floor(Math.random()*3) +1
    let comp;   
    
    if(computerChoice === 1){
        console.log(comp = 'rock')
    }else if(computerChoice ===2){
        console.log(comp = 'paper')
    }else if(computerChoice ===3){
        console.log(comp = 'scissors')
    }

    let result;
    if(playerChoice === comp){
        result = `It is a Tie. You chose ${playerChoice} and computer chose ${comp}`
        roundsPlayed++
    }else if(
        (playerChoice === 'rock' && comp === 'scissors') ||
        (playerChoice === 'scissors' && comp === 'paper') ||
        (playerChoice === 'paper' && comp === 'rock')){
         result = `You Win! You chose ${playerChoice} and computer chose ${comp}`
         scorePlayer++
         localStorage.setItem('scorePlayer', scorePlayer)
         roundsPlayed++
        }else if(
            (playerChoice === 'rock' && comp === 'paper') ||
            (playerChoice === 'scissors' && comp === 'rock') ||
            (playerChoice === 'paper' && comp === 'scissors')){
             result = `You Lose! You chose ${playerChoice} and computer chose ${comp}`
             scoreBot++
             localStorage.setItem('scoreBot', scoreBot)
             roundsPlayed++
            }

            console.log(roundsPlayed)
            let win;
            if(scoreBot>scorePlayer){
                win = 'Computer'
            }else{
                win = 'You'
            }
            if(roundsPlayed=== 5){
                `${win} Win! Score is ${scoreBot} to ${scorePlayer}`
                document.querySelector('.hide').style.display = 'block'
            }else if(roundsPlayed === 5 && scoreBot===scorePlayer){
                game(playerChoice)
            }


            
         document.querySelector('h3').innerText = result
         document.querySelector('#player').innerText = scorePlayer
         document.querySelector('#bot').innerText = scoreBot   
    
}
document.querySelector('.hide').addEventListener('click', reset)
function reset(){

    localStorage.setItem('scoreBot', '0')
    localStorage.setItem('scorePlayer', '0')
    scoreBot = 0
    scorePlayer = 0
}






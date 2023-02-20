let scorePlayer = '0'
let scoreBot = '0'
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
         roundsPlayed++
        }else if(
            (playerChoice === 'rock' && comp === 'paper') ||
            (playerChoice === 'scissors' && comp === 'rock') ||
            (playerChoice === 'paper' && comp === 'scissors')){
             result = `You Lose! You chose ${playerChoice} and computer chose ${comp}`
             scoreBot++
             roundsPlayed++
            }

            if((roundsPlayed=== 5) && scorePlayer>scoreBot|| scorePlayer<scoreBot){
                console.log('hello')
            }


            
         document.querySelector('h3').innerText = result
         document.querySelector('#player').innerText = scorePlayer
         document.querySelector('#bot').innerText = scoreBot   
    
}

function reset(){
    
}






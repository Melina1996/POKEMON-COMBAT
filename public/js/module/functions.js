import * as INSTANCE from "./instances.js"
import * as MAIN from "./../main.js"

//DARK ROOM BUBBLES

export let firstDarkBubble = document.querySelector(".bubble-dark-one")

export let secondDarkBubble = document.querySelector(".bubble-dark-two")

export let thirdDarkBubble = document.querySelector(".bubble-dark-three")


export function bubblesDarkRoom(){
    setTimeout(function(){

        firstDarkBubble.classList.remove("hide")
        
    }, 1000)

    setTimeout(function(){

        firstDarkBubble.classList.add("hide")
        secondDarkBubble.classList.remove("hide")
        
    }, 5000)

    setTimeout(function(){

        secondDarkBubble.classList.add("hide")
        thirdDarkBubble.classList.remove("hide")
        
    }, 9000)
}

//THE TWO OPPONENTS SCREEN

let logoPokemon = document.querySelector(".img-logo-pokemon")

let logoMario = document.querySelector(".super-mario-logo")
console.log(logoMario)

let speechTimeTravel = document.querySelector(".speech-time-travel")

let speechPokemonCombat = document.querySelector(".speech-pokemon-combat")

let vsText = document.querySelector(".vs-text")

export function opponents(playerOne,playerTwo){

        logoPokemon.classList.add("hide")

        logoMario.classList.add("hide")
    
        vsText.innerText = ""

        speechTimeTravel.classList.remove("hide")

        setTimeout(function(){

            speechTimeTravel.classList.add("hide")

            speechPokemonCombat.classList.remove("hide")

            setTimeout(function(){

    
                speechPokemonCombat.classList.add("hide")
    
                vsText.innerText = `${playerOne.name} against ${playerTwo.name}`
    
            },6000)

        },7000)

}

//CHOSE RANDOM OPPONENT

export let indexPokemon

export let chosenBoss

export let bossCombat = document.querySelector("#opponent")


export function choseRandomBoss(array){
  for (let i = 0; i <= array.length; i++) {

    //random index to select a random image to put into my div 
    indexPokemon = Math.floor(Math.random()*array.length)
    //my random chosen img
    chosenBoss = array[indexPokemon]

    //add the randomly chosen img-link to my div of the opponent
    bossCombat.src = chosenBoss.img

    bossCombat.setAttribute("originalhp",`${chosenBoss.healthPoints}`)

    document.querySelector("#name-opponent").innerText = chosenBoss.name
  }
} 

//ASSIGN attack names as inner text to my btns 
export let allAttackNames = document.querySelectorAll(".attack-name")

export function attackNames(player){
  for (let i = 0; i < allAttackNames.length; i++) {
    allAttackNames[i].innerText = player.attackNames[i]   
  }
} 

//ANIMATION MARIO & PEACH DISAPPEAR

let myMario = document.querySelector("#img-mario")

let myPeach = document.querySelector("#img-peach")

//chosen Player disappears in the tube
export function disappear(player){

  console.log(player.name)
  if(player.name == "MARIO"){
    myMario.classList.remove("bounce")
    myMario.classList.add("tube")
  } else if(player.name == "PEACH"){
    myPeach.classList.remove("bounce")
    myPeach.classList.add("tube")
  }
}

//RANDOM ATTACK BOSS 

export let indexAttack

export let chosenAttack

export let attacksOrder = ["attack-one","attack-two","attack-three","attack-four"]

export function randomAttack(array){
  for (let i = 0; i <= array.length; i++) {
    //random index to select a random image to put into my div 
    indexAttack = Math.floor(Math.random()*array.length)
    
    //my random chosen img
    return chosenAttack = array[indexAttack]
  }
}


//ATTACK FUNCTION PLAYER

let gameText = document.querySelector(".game-text")

let profileHPOne = document.querySelector(".health-points-player-inside")

let profileHPTwo = document.querySelector(".health-points-opponent-inside")


export function attackBoss(playerTwo,playerOne){

    bossCombat.classList.remove("shake")
    bossCombat.classList.add("bounce")

      if(chosenAttack == "attack-one"){
        playerTwo.firstAttack(playerOne)
        MAIN.playerMario.classList.remove("bounce")
        MAIN.playerMario.classList.add("shake")
        gameText.innerText = `${playerTwo.name} attacks ${playerOne.name}. Remaining HP: ${playerOne.healthPoints}`
        profileHPOne.style.width = `${playerOne.healthPoints/MAIN.playerMario.getAttribute("originalhp")*100}%`
      } else if(chosenAttack == "attack-two"){
        playerTwo.secondAttack(playerOne)
        MAIN.playerMario.classList.remove("bounce")
        MAIN.playerMario.classList.add("shake")
        gameText.innerText = `${playerTwo.name} attacks ${playerOne.name}. Remaining HP: ${playerOne.healthPoints}`
        profileHPOne.style.width = `${playerOne.healthPoints/MAIN.playerMario.getAttribute("originalhp")*100}%`
      } else if(chosenAttack == "attack-three"){
        MAIN.playerMario.classList.remove("bounce")
        MAIN.playerMario.classList.add("shake")
        playerTwo.thirdAttack(playerOne)
        gameText.innerText = `${playerTwo.name} attacks ${playerOne.name}. Remaining HP: ${playerOne.healthPoints}`
        profileHPOne.style.width = `${playerOne.healthPoints/MAIN.playerMario.getAttribute("originalhp")*100}%`
      } else if(chosenAttack == "attack-four"){
        playerTwo.fourthAttack(playerOne)
        gameText.innerText = `${playerTwo.name} recovers and gains new HP to in total: ${playerTwo.healthPoints} HP`
        profileHPTwo.style.width = `${playerTwo.healthPoints/bossCombat.getAttribute("originalhp")*100}%`
      }
    
    setTimeout(function(){
        MAIN.playerMario.classList.remove("shake")
        MAIN.playerMario.classList.add("bounce")
    }, 1000)


    if(playerOne.healthPoints <= 0){

        setTimeout(function(){gameOver()}, 1000)

    } 
}

//show losing display

function gameOver(){
    MAIN.runningGame.classList.add("hide")
    MAIN.gameOver.classList.remove("hide")
}

//show losing display

function win(){
    MAIN.combatDisplay.classList.add("hide")
    MAIN.win.classList.remove("hide")
}


let count = 0

let counterRound = document.querySelectorAll(".level")

//ATTACK FUNCTION AGAINST BOSS

export let allAttackBtns = document.querySelectorAll(".my-attack")

export function attack(playerOne,playerTwo){
    
          allAttackBtns.forEach(element => {
    
            element.addEventListener("click",(e)=>{
    
              if(playerOne.healthPoints > 0 && playerTwo.healthPoints >0){

                count ++

                counterRound[0].innerText = count
                counterRound[1].innerText = count
    
                if(e.target.id == "attack-one"){
                  playerOne.firstAttack(playerTwo)
                  bossCombat.classList.remove("bounce")
                  bossCombat.classList.add("shake")
                  gameText.innerText = `${e.target.innerText}: ${playerOne.name} attacks ${playerTwo.name} and leaves him with ${playerTwo.healthPoints} HP`
                  profileHPTwo.style.width = `${playerTwo.healthPoints/bossCombat.getAttribute("originalhp")*100}%`
                } else if (e.target.id == "attack-two"){
                  playerOne.secondAttack(playerTwo)
                  bossCombat.classList.remove("bounce")
                  bossCombat.classList.add("shake")
                  gameText.innerText = `${e.target.innerText}: ${playerOne.name} attacks ${playerTwo.name} and leaves him with ${playerTwo.healthPoints} HP`
                  profileHPTwo.style.width = `${playerTwo.healthPoints/bossCombat.getAttribute("originalhp")*100}%`
                } else if (e.target.id == "attack-three"){
                  playerOne.thirdAttack(playerTwo)
                  if(playerOne.stars <= 0){
                    gameText.innerText = `${e.target.innerText}: ${playerOne.name} can not attack because there are no more stars left`
                  } else {
                    bossCombat.classList.remove("bounce")
                    bossCombat.classList.add("shake")
                    gameText.innerText = `${e.target.innerText}: ${playerOne.name} attacks ${playerTwo.name} and leaves him with ${playerTwo.healthPoints} HP`
                    profileHPTwo.style.width = `${playerTwo.healthPoints/bossCombat.getAttribute("originalhp")*100}%`
                  }
                } else if (e.target.id == "attack-four"){
                  playerOne.fourthAttack(playerTwo)
                  gameText.innerText = `${e.target.innerText}: ${playerOne.name} recovers and gains new HP to in total: ${playerOne.healthPoints} HP`
                  profileHPOne.style.width = `${playerOne.healthPoints/MAIN.playerMario.getAttribute("originalhp")*100}%`
                }
    
              if(playerTwo.healthPoints > 0 && playerOne.healthPoints > 0){
                randomAttack(attacksOrder)
                setTimeout(function(){
                attackBoss(chosenBoss,MAIN.chosenMario)
                }, 3500)
                
                //in case one of the players is dead before boss'attack
              } else {
                
                    if(playerOne.healthPoints <= 0){

                        setTimeout(function(){gameOver()}, 1000)

                    } else if(playerTwo.healthPoints <= 0){

                        setTimeout(function(){win()}, 1000)
                    }
              }
    
              //in case one of the players is already dead before the next round
          } 
        else {

                if(playerOne.healthPoints <= 0){

                    setTimeout(function(){gameOver()}, 1000)

                } else if(playerTwo.healthPoints <= 0){

                    setTimeout(function(){win()}, 1000)
                
                }
          }
        })  
      })
    }


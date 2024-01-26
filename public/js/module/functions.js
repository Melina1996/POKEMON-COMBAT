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

export function opponents(){

        logoPokemon.classList.add("hide")

        logoMario.classList.add("hide")
    
        vsText.innerText = ""

        speechTimeTravel.classList.remove("hide")

        setTimeout(function(){

            speechTimeTravel.classList.add("hide")

            speechPokemonCombat.classList.remove("hide")

            setTimeout(function(){

    
                speechPokemonCombat.classList.add("hide")
    
                vsText.innerText = `coucou`
    
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
    bossCombat.src = chosenBoss.frontImg

    bossCombat.setAttribute("originalhp",`${chosenBoss.healthPoints}`)

    document.querySelector(".name-opponent").innerText = chosenBoss.name
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

      if(chosenAttack == "attack-one"){
        playerTwo.firstAttack(playerOne)
        gameText.innerText = `${playerTwo.name} attacks ${playerOne.name} and leaves him with ${playerOne.healthPoints} HP`
        profileHPOne.style.width = `${playerOne.healthPoints/MAIN.playerMario.getAttribute("originalhp")*100}%`
      } else if(chosenAttack == "attack-two"){
        playerTwo.secondAttack(playerOne)
        gameText.innerText = `${playerTwo.name} attacks ${playerOne.name} and leaves him with ${playerOne.healthPoints} HP`
        profileHPOne.style.width = `${playerOne.healthPoints/MAIN.playerMario.getAttribute("originalhp")*100}%`
      } else if(chosenAttack == "attack-three"){
        playerTwo.thirdAttack(playerOne)
        gameText.innerText = `${playerTwo.name} attacks ${playerOne.name} and leaves him with ${playerOne.healthPoints} HP`
        profileHPOne.style.width = `${playerOne.healthPoints/MAIN.playerMario.getAttribute("originalhp")*100}%`
      } else if(chosenAttack == "attack-four"){
        playerTwo.fourthAttack(playerOne)
        gameText.innerText = `${playerTwo.name} recovers and gains new HP to in total: ${playerOne.healthPoints} HP`
        profileHPOne.style.width = `${playerOne.healthPoints/MAIN.playerMario.getAttribute("originalhp")*100}%`
    
      }
}


//ATTACK FUNCTION AGAINST BOSS

export let allAttackBtns = document.querySelectorAll(".my-attack")

export function attack(playerOne,playerTwo){
  
      console.log(playerOne)
      console.log(playerTwo)
    
          allAttackBtns.forEach(element => {
    
            element.addEventListener("click",(e)=>{
    
              if(playerOne.healthPoints > 0 && playerTwo.healthPoints >0){
    
                if(e.target.id == "attack-one"){
                  playerOne.firstAttack(playerTwo)
                  gameText.innerText = `${e.target.innerText}: ${playerOne.name} attacks ${playerTwo.name} and leaves him with ${playerTwo.healthPoints} HP`
                  profileHPTwo.style.width = `${playerTwo.healthPoints/bossCombat.getAttribute("originalhp")*100}%`
                } else if (e.target.id == "attack-two"){
                  playerOne.secondAttack(playerTwo)
                  gameText.innerText = `${e.target.innerText}: ${playerOne.name} attacks ${playerTwo.name} and leaves him with ${playerTwo.healthPoints} HP`
                  profileHPTwo.style.width = `${playerTwo.healthPoints/bossCombat.getAttribute("originalhp")*100}%`
                } else if (e.target.id == "attack-three"){
                  playerOne.thirdAttack(playerTwo)
                  gameText.innerText = `${e.target.innerText}: ${playerOne.name} attacks ${playerTwo.name} and leaves him with ${playerTwo.healthPoints} HP`
                  profileHPTwo.style.width = `${playerTwo.healthPoints/bossCombat.getAttribute("originalhp")*100}%`
                } else if (e.target.id == "attack-four"){
                  playerOne.fourthAttack(playerTwo)
                  gameText.innerText = `${e.target.innerText}: ${playerOne.name} recovers and gains new HP to in total: ${playerOne.healthPoints} HP`
                  profileHPTwo.style.width = `${playerTwo.healthPoints/bossCombat.getAttribute("originalhp")*100}%`
                }
    
              if(playerTwo.healthPoints > 0 && playerOne.healthPoints > 0){
                randomAttack(attacksOrder)
                setTimeout(function(){
                attackBoss(chosenBoss,MAIN.chosenMario);
                }, 2000)
    
                  if(playerTwo.healthPoints <= 0){
                    alert(`${playerOne.name} is DEAD`)
                  } 
                
              } else {
                
                  if(playerOne.healthPoints <= 0){
                  alert(`${playerOne.name} is DEAD`)
                } else if(playerTwo.healthPoints <= 0){
                  alert(`${playerTwo.name} is DEAD`)
                }
              }
    
          } else {
            if(playerOne.healthPoints <= 0){
              alert(`${playerOne.name} is DEAD`)
            } else if(playerTwo.healthPoints <= 0){
              alert(`${playerTwo.name} is DEAD`)
            }
          }
        })  
      })
    }


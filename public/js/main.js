import * as INSTANCE from "./module/instances.js"
import * as FUNCTION from "./module/functions.js"


//ALL MY DISPLAYS

let startDisplay = document.querySelector(".start-display")

let choseDisplay = document.querySelector(".chose-pokemon")

let combatDisplay = document.querySelector(".battle-display")


// // START DISPLAY

let btnStart = document.querySelector(".start")

btnStart.addEventListener("click",()=>{
  startDisplay.classList.add("hide")
  choseDisplay.classList.remove("hide")
})

// // CHOSE AVATAR

let firstBubble = document.querySelector(".first-speech-bubble")

let secondBubble = document.querySelector(".second-speech-bubble")

let thirdBubble = document.querySelector(".third-speech-bubble")

let btnNextOne = document.querySelector(".btn-next-chose-pokemon")

let btnNextTwo = document.querySelector(".btn-next-two")

let myPokemons = document.querySelector(".my-pokemons")

// //screen is empty besides background-img and after 1.2s, the first bubble appears
// setTimeout(function(){
//   firstBubble.classList.remove("hide")
// }, 1200)

// //after 5s, the btn appears
// setTimeout(function(){
//   btnNextOne.classList.remove("hide")
// }, 5000)

// //on click, the next bubble appears and 5s delayed the next btn (the first bubble disappears)
// btnNextOne.addEventListener("click",()=>{
//   firstBubble.classList.add("hide")
//   btnNextOne.classList.add("hide")
//   secondBubble.classList.remove("hide")
//   setTimeout(function(){
//     btnNextTwo.classList.remove("hide")
//   },5000)
// })

// //on click, the next bubble appears and 5s delayed the pokemons appear
// btnNextTwo.addEventListener("click",()=>{
//   secondBubble.classList.add("hide")
//   btnNextTwo.classList.add("hide")
//   thirdBubble.classList.remove("hide")
//   setTimeout(function(){
//     thirdBubble.classList.add("hide")
//     myPokemons.classList.remove("hide")
//   },5000)
// })



let allBtnPokemons = document.querySelectorAll(".pokemon-btn")

//player in display "combat"
let playerBack = document.querySelector("#player-back")

let allMarios = [INSTANCE.peach,INSTANCE.mario]

let allPokemons = [INSTANCE.charmeleon,INSTANCE.venusaur,INSTANCE.blastoise]

//CHOSE RANDOM OPPONENT

let indexPokemon

let chosenBoss

let bossCombat = document.querySelector("#opponent")

function choseRandomBoss(array){
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

//assign the attack names as inner text to my btns 
let allAttackNames = document.querySelectorAll(".attack-name")

//assign all the attack names of my chosen Pokemon to my attack Btns
function attackNames(player){
  for (let i = 0; i < allAttackNames.length; i++) {
    allAttackNames[i].innerText = player.attackNames[i]   
  }
} 


let indexAttack

let chosenAttack

let attacksOrder = ["attack-one","attack-two","attack-three","attack-four"]

function randomAttack(array){
  for (let i = 0; i <= array.length; i++) {
    //random index to select a random image to put into my div 
    indexAttack = Math.floor(Math.random()*array.length)
    
    //my random chosen img
    return chosenAttack = array[indexAttack]
  }
}

function attackBoss(playerTwo,playerOne){
  if(chosenAttack == "attack-one"){
    playerTwo.firstAttack(playerOne)
    gameText.innerText = `${playerTwo.name} attacks ${playerOne.name} and leaves him with ${playerOne.healthPoints} HP`
    profileHPOne.style.width = `${playerOne.healthPoints/playerBack.getAttribute("originalhp")*100}%`
  } else if(chosenAttack == "attack-two"){
    playerTwo.secondAttack(playerOne)
    gameText.innerText = `${playerTwo.name} attacks ${playerOne.name} and leaves him with ${playerOne.healthPoints} HP`
    profileHPOne.style.width = `${playerOne.healthPoints/playerBack.getAttribute("originalhp")*100}%`
  } else if(chosenAttack == "attack-three"){
    playerTwo.thirdAttack(playerOne)
    gameText.innerText = `${playerTwo.name} attacks ${playerOne.name} and leaves him with ${playerOne.healthPoints} HP`
    profileHPOne.style.width = `${playerOne.healthPoints/playerBack.getAttribute("originalhp")*100}%`
  } else if(chosenAttack == "attack-four"){
    playerTwo.fourthAttack(playerOne)
    gameText.innerText = `${playerTwo.name} recovers and gains new HP to in total: ${playerOne.healthPoints} HP`
    profileHPOne.style.width = `${playerOne.healthPoints/playerBack.getAttribute("originalhp")*100}%`

  }
}

let allAttackBtns = document.querySelectorAll(".my-attack")

//attack function and respective variables

let gameText = document.querySelector(".game-text")

let profileHPOne = document.querySelector(".health-points-player-inside")

let profileHPTwo = document.querySelector(".health-points-opponent-inside")

function attack(playerOne,playerTwo){
  
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
              attackBoss(chosenBoss,chosenMario);
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

let chosenMario

//START from the choice of my Pokemon (if I call the functions separately, the respective variables are not recognized)

allBtnPokemons.forEach(element => {
  element.addEventListener("click", (e) => {
    for (let i = 0; i < allMarios.length; i++) {
      if(e.target.innerText == allMarios[i].name){
        chosenMario = allMarios[i]
        playerBack.src = allMarios[i].backImg
        //stock the value of the original HP in an attribute of my pokemon
        playerBack.setAttribute("originalhp",`${allMarios[i].healthPoints}`)
        document.querySelector(".name-player").innerText = allMarios[i].name
        choseDisplay.classList.add("hide")
        combatDisplay.classList.remove("hide")
        choseRandomBoss(allPokemons)
        attackNames(chosenMario)
        attack(chosenMario,chosenBoss)
      }
    }
  })
})

//COMBAT DISPLAY


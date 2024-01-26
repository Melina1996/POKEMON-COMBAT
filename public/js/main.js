import * as INSTANCE from "./module/instances.js"
import * as FUNCTION from "./module/functions.js"


//ALL MY DISPLAYS

let startDisplay = document.querySelector(".start-display")

let choseDisplay = document.querySelector(".chose-pokemon")

let combatDisplay = document.querySelector(".battle-display")


// // START DISPLAY

let btnStart = document.querySelector(".start")
console.log(btnStart)


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

console.log(allBtnPokemons)

//player in display "combat"
let playerBack = document.querySelector("#player-back")

let allPokemons = [INSTANCE.venusaur,INSTANCE.charmeleon,INSTANCE.blastoise]


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

    document.querySelector(".name-opponent").innerText = chosenBoss.name
  }
}

//double LOOP in order to go over all my btns (addEventListener) & compare the clicked btn name with the Pokemons stocked in my array, respectively is the opponent pokemon chosen (among the remaining pokemons)

allBtnPokemons.forEach(element => {
  element.addEventListener("click",(element)=>{
    for (let i = 0; i < allPokemons.length; i++) {
      if(element.target.innerText == allPokemons[i].name){
        playerBack.src = allPokemons[i].backImg
        document.querySelector(".name-player").innerText = allPokemons[i].name
        allPokemons.splice(i,1)
        choseDisplay.classList.add("hide")
        combatDisplay.classList.remove("hide")
        choseRandomBoss(allPokemons)
      }
    }
  })
})

//COMBAT DISPLAY







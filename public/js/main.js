import * as INSTANCE from "./module/instances.js"
import * as FUNCTION from "./module/functions.js"


//ALL MY DISPLAYS

export let startDisplay = document.querySelector(".start-display")

export let choseDisplay = document.querySelector(".chose-mario")

export let darkDisplay = document.querySelector(".dark-screen")

export let pokemonSurprise = document.querySelector(".pokemon-surprise")

export let combatDisplay = document.querySelector(".battle-display")

export let runningGame = document.querySelector(".game-on")

export let gameOver = document.querySelector(".game-over-display")

export let win = document.querySelector(".winning-display")

//START DISPLAY

let btnStart = document.querySelector(".start")

let marioAvatar = document.querySelector(".mario-start")


btnStart.addEventListener("mouseout",()=>{
  marioAvatar.classList.toggle("bounceMario")
})

btnStart.addEventListener("click",()=>{
  startDisplay.classList.add("hide")
  choseDisplay.classList.remove("hide")
  document.querySelector("#title-audio").play()
})

//CHOOSE MARIO CHARACTER DISPLAY

let firstBubble = document.querySelector(".first-speech-bubble")

let secondBubble = document.querySelector(".second-speech-bubble")

let thirdBubble = document.querySelector(".third-speech-bubble")

let btnNextOne = document.querySelector(".btn-next-chose-mario")

let btnNextTwo = document.querySelector(".btn-next-two")

let myMarios = document.querySelector(".my-marios")

// //CREATE CHOSE MARIO CHARACTER DISPLAY

// let choseDisplay = document.createElement("div")

// choseDisplay.setAttribute("class","chose-mario")

// let divSpeechBubble = document.createElement("div")

// divSpeechBubble.setAttribute("class","speech-bubble")

// let firstSpeechBubble = document.createElement("img")

// firstSpeechBubble.src = "./public/assets/img/pixel-speech-bubble (1).gif"

// firstSpeechBubble.setAttribute("class","first-speech-bubble")

// ///first btn with img

// let firstBtn = document.createElement("button")

// firstBtn.setAttribute("class","btn-next-chose-mario")

// let firstBtnImg = document.createElement("img")

// firstBtnImg.src = "./public/assets/img/icons8-arrow-32.png"

// firstBtn.appendChild(firstBtnImg)

// ///second btn with img

// let secondBtn = document.createElement("button")

// secondBtn.setAttribute("class","btn-next-two")

// let secondBtnImg = document.createElement("img")

// secondBtnImg.src = "./public/assets/img/icons8-arrow-32.png"


// ///thid speech-bubble

 
// choseDisplay.appendChild(divSpeechBubble)

// document.querySelector("main").appendChild(choseDisplay)




//screen is empty besides background-img and after 1.2s, the first bubble appears
setTimeout(function(){
  firstBubble.classList.remove("hide")
}, 1200)

//after 5s, the btn appears
setTimeout(function(){
  btnNextOne.classList.remove("hide")
}, 5000)

//on click, the next bubble appears and 5s delayed the next btn (the first bubble disappears)
btnNextOne.addEventListener("click",()=>{

  firstBubble.classList.add("hide")

  btnNextOne.classList.add("hide")

  secondBubble.classList.remove("hide")

  setTimeout(function(){
    btnNextTwo.classList.remove("hide")
  },5000)

})

let myPeach = document.querySelector("#img-peach")

let statsPeach = document.querySelector(".data-player-one")

let myMario = document.querySelector("#img-mario")

let statsMario = document.querySelector(".data-player-two")

//stats players

//attribute data to h1s player one

document.querySelector("#first-value").innerText = INSTANCE.peach.name 

document.querySelector("#second-value").innerText = INSTANCE.peach.healthPoints 

document.querySelector("#third-value").innerText = INSTANCE.peach.attackPoints 

document.querySelector("#fourth-value").innerText = INSTANCE.mario.name 

document.querySelector("#fifth-value").innerText = INSTANCE.mario.healthPoints 

document.querySelector("#sixth-value").innerText = INSTANCE.mario.attackPoints 

myPeach.addEventListener("mouseover",()=>{
  statsPeach.classList.toggle("hide")
})

myMario.addEventListener("mouseover",()=>{
  statsMario.classList.toggle("hide")
})



//on click, the next bubble appears and 5s delayed the marios appear
btnNextTwo.addEventListener("click",()=>{

  secondBubble.classList.add("hide")

  btnNextTwo.classList.add("hide")

  thirdBubble.classList.remove("hide")

  setTimeout(function(){

    thirdBubble.classList.add("hide")

    myMarios.classList.remove("hide")

  },6000)

})



//TRANSITION CHOSE MARIO CHARACTER TO COMBAT DISPLAY

let allBtnMario = document.querySelectorAll(".mario-btn")

export let playerMario = document.querySelector("#player-mario")

let allMarios = [INSTANCE.peach,INSTANCE.mario]

let allPokemons = [INSTANCE.charmeleon,INSTANCE.venusaur,INSTANCE.blastoise]

export let chosenMario


allBtnMario.forEach(element => {

  element.addEventListener("click", (e) => {

    for (let i = 0; i < allMarios.length; i++) {

      if(e.target.innerText == allMarios[i].name){
        chosenMario = allMarios[i]

        FUNCTION.disappear(chosenMario)

        playerMario.src = allMarios[i].img

        //stock the value of the original HP in an attribute of my mario character
        playerMario.setAttribute("originalhp",`${allMarios[i].healthPoints}`)

        document.querySelector("#name-player").innerText = allMarios[i].name

        //need Timeout-function so the animation of the disappearing Mario/Peach has enough time
        setTimeout(function(){

          choseDisplay.classList.add("hide")

          darkDisplay.classList.remove("hide")

        }, 2000)
      

        FUNCTION.bubblesDarkRoom()

        setTimeout(function(){

          darkDisplay.classList.add("hide")

          pokemonSurprise.classList.remove("hide")

          document.querySelector("#battle-audio").play()

          setTimeout(function(){

            FUNCTION.choseRandomBoss(allPokemons)

            FUNCTION.opponents(chosenMario,FUNCTION.chosenBoss)

            setTimeout(function(){

              pokemonSurprise.classList.add("hide")

              combatDisplay.classList.remove("hide")

              FUNCTION.attackNames(chosenMario)

              FUNCTION.attack(chosenMario,FUNCTION.chosenBoss)

            },14000)

          },2000)

          

        },14000) 

      }
    }
  })
})



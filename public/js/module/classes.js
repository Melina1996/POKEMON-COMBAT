
export class Pokemon{
    constructor(name,healthPoints,attackPoints,attackNames,backImg,frontImg){
        this.name = name;
        this.healthPoints = healthPoints;
        this.attackPoints = attackPoints;
        this.attackNames = attackNames;
        this.backImg = backImg;
        this.frontImg = frontImg;
    }
} 

export class Charmeleon extends Pokemon {
    constructor(name,healthPoints,attackPoints,attackNames,backImg,frontImg){
    super(name,healthPoints,attackPoints,attackNames,backImg,frontImg);
    }

    firstAttack(){
        console.log("IM CHARELEON")
    }

    secondAttack(){
        console.log("BLABLA CHARMELEON")
    }

    thirdAttack(){

    }

    fourthAttack(){

    }
}


export class Venusaur extends Pokemon {
    constructor(name,healthPoints,attackPoints,attackNames,backImg,frontImg){
    super(name,healthPoints,attackPoints,attackNames,backImg,frontImg);
    }

    firstAttack(){
        console.log("VENUSAUR AM START")
    }

    secondAttack(){
        console.log("NOCHMAL VENUSAUR AM START")
    }

    thirdAttack(){

    }

    fourthAttack(){

    }
}

export class Blastoise extends Pokemon {
    constructor(name,healthPoints,attackPoints,attackNames,backImg,frontImg){
    super(name,healthPoints,attackPoints,attackNames,backImg,frontImg);
    }

    firstAttack(){
        console.log("Blastoise AM START")
    }

    secondAttack(){
        console.log("NOCHMAL Blastoise AM START")
    }

    thirdAttack(){

    }

    fourthAttack(){

    }
}


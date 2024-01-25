import * as INSTANCE from "./instances.js"

//Class for my  PICKACHU Bosses as they all have the same properties
export class Pokemon {
    constructor(name,attackPoints,healthPoints,backImg,frontImg){
        this.name = name; 
        this.attackPoints = attackPoints;
        this.healthPoints = healthPoints;
        this.backImg = backImg;
        this.frontImg = frontImg;
    }
}

export class Charmeleon extends Pokemon{
    constructor(name,attackPoints,healthPoints,backImg,frontImg){
    super(name,attackPoints,healthPoints,backImg,frontImg);
    }

    normalFire(opponent){
        opponent.healthPoints -= this.attackPoints
    }

    megaFire(opponent){
        opponent.healthPoints -= 2*this.attackPoints
    }

    fireball(opponent){
        opponent.healthPoints -= 3*this.attackPoints
    }

    recover(){
        this.healthPoints += 20
    }
}

export class Venusaur extends Pokemon{
    constructor(name,attackPoints,healthPoints,backImg,frontImg){
    super(name,attackPoints,healthPoints,backImg,frontImg);
    }

    normalFlower(opponent){
        opponent.healthPoints -= this.attackPoints
    }

    megaFlower(opponent){
        opponent.healthPoints -= 2*this.attackPoints
    }

    flowerPower(opponent){
        opponent.healthPoints -= 3*this.attackPoints
    }
    recover(){
        this.healthPoints += 30
    }
}

export class Blastoise extends Pokemon{
    constructor(name,attackPoints,healthPoints,backImg,frontImg){
    super(name,attackPoints,healthPoints,backImg,frontImg);
    }

    normalTurtle(opponent){
        opponent.healthPoints -= this.attackPoints
    }

    megaTurtle(opponent){
        opponent.healthPoints -= 2*this.attackPoints
    }

    turtlePower(opponent){
        opponent.healthPoints -= 3*this.attackPoints
    }

    recover(){
        this.healthPoints += 30
    }
}
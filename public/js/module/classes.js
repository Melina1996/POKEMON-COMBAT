import * as INSTANCE from "./instances.js"

//Class for my pokemons

export class Pokemon {
    constructor(name,attackPoints,healthPoints){
        this.name = name; 
        this.attackPoints = attackPoints;
        this.healthPoints = healthPoints;
    }

    //Method "attack": if combat mode of hero is "attack", full attack points are substracted from hero, if combat mode of hero is "defense", only 50% of attack points are substracted from hero
    attack(hero){
        if(hero.combatMode== "attack"){
            hero.healthPoints -= this.attackPoints
            alert(`${hero.name} [combat mode: ${hero.combatMode.toUpperCase()}] loses ${this.attackPoints} health points. Remaining health points: ${hero.healthPoints}.`)
        } else if (hero.combatMode == "defense"){
            hero.healthPoints -= 0.5*this.attackPoints
            alert(`${hero.name} [combat mode: ${hero.combatMode.toUpperCase()}] loses ${0.5*this.attackPoints} health points. Remaining health points: ${hero.healthPoints}.`)
        }

    }
}
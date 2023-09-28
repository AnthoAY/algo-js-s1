class Pokemon {
    constructor (name, attack, defense, hp) {
        this.name = name; 
        this.attack = attack; 
        this.defense = defense; 
        this.hp = hp; 
    }
}

let Dracaufeu = new Pokemon("Dracaufeu", 75, 65, 320);
//console.log(Dracaufeu)
let Mewtwo = new Pokemon("Mewtwo", 95, 40, 275);
//console.log(Mewtwo)

function attackPokemon(Pokemon1, Pokemon2){
    Pokemon1.attack - Pokemon2.defense;
    Pokemon2.hp -= Pokemon1.attack - Pokemon2.defense;
    return Pokemon1.attack - Pokemon2.defense
}

while (Dracaufeu.hp > 0 && Mewtwo.hp > 0) {
    attackPokemon(Dracaufeu, Mewtwo);
    console.log("Il reste " + Mewtwo.hp + " PV à Mewtwo, Attack = -" + attackPokemon(Dracaufeu, Mewtwo));

    if (Mewtwo.hp <= 0){
        console.log("Mewtwo est mort");
        break;
    }

    attackPokemon(Mewtwo, Dracaufeu);
    console.log("Il reste " + Dracaufeu.hp + " PV à Dracaufeu, Attack = -" + attackPokemon(Mewtwo, Dracaufeu));

    if (Dracaufeu.hp <= 0){
        console.log("Dracaufeu est mort");
        break;
    }
}

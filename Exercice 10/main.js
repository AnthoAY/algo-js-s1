class Hater {
    constructor(name, pv) {
        this.name = name
        this.pv = pv
    }

    trajet(music) {
        let feu = 0
        let changementsTaxi = 0

        while (this.pv > 0 && feu < 30) {
            feu = feu + 1

            let rand = random(0, music.length - 1)
            let currentMusic = music[rand]
            console.log("Feu N°",feu, currentMusic, "est à la radio")

            if (currentMusic === "Wejdene - Anissa") {
                this.pv = this.pv - 1
                changementsTaxi = changementsTaxi + 1
                console.log(this.name, "Perd 1 PV à chaque oreille,", "Taxi N°", changementsTaxi)
            }

            if (this.pv === 0) {
                console.log("Les tympans de", this.name, "ont succombés...")
                break
            }

            if (feu === 30) {
                console.log(this.name, "est arrivé chez soi avec ses tympans fonctionnels")
                break
            }
        }
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let music = ["Wejdene - Anissa", "Babyshark", "K-Pop", "Petit Ours Brun", "Honesty"]
let John = new Hater("John", 10)

John.trajet(music)
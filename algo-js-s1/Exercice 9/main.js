let users = ["Stéphanie","Gaia","Etienne","Michel","Roberto","Julie"]

function countCharacter (value) {
    console.log(value)
    return value.length
}

users.forEach (user => {
    if (countCharacter(user) > 5) {
        console.log ("c'est un prénom long de plus de 5 lettres")
    } else {
        console.log ("ce n'est pas du tout un prénom long")
    }
})
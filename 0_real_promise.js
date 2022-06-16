const age = -1

// Jednoduchy promise - neni prilis uzitecny, ale jednoduchy
Promise.resolve(age)
    .then((value) => value + 1)
    .then((value) => value + 1)
    .then((value) => console.log(value))

// Slozitejsi promise - je uzitecny, ale je trochu slozitejsi
new Promise((resolve, reject) => {
        if (age > 0) resolve(1)
        else reject(`You put ${age}, but age must be > 0!`)
    })
    .then((value) => value + 1)
    .then((value) => value + 1)
    .then((value) => console.log(value))
    .catch((value) => console.error("Error: " + value))

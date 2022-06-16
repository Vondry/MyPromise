const age = -1

// Jake bude poradi vypisu z console.log?

console.log("Start of script")

// Jednoduchy promise - neni uzitecny
Promise.resolve(age)
    .then((value) => value + 1)
    .then((value) => value + 1)
    .then((value) => console.log(value))

// Slozitejsi promise - je uzitecny
new Promise((resolve, reject) => {
        if (age > 0) resolve(1)
        else reject(`You put ${age}, but age must be > 0!`)
    })
    .then((value) => value + 1)
    .then((value) => value + 1)
    .then((value) => console.log(value))
    .catch((value) => console.error("Error: " + value))

console.log("End of script")
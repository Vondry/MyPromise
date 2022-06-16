function myPromise(value) {
    return {
        then: (func) => myPromise(func(value)),
        return: () => value
    }
}

const finalValue = myPromise(10) // Promise.resolve(10)
    .then((value) => value * 2)
    .then((value) => value + 10)
    .then((value) => value - 5)
    .return()

console.log(finalValue)

// Funkce return neexistuje na standardnich Promisech - jak tedy muzeme dostat hodnotu zpet do programu?

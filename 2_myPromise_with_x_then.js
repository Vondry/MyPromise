function myPromise(value) {
    return {
        then: (func) => myPromise(func(value))
    }
}

myPromise(1) // Promise.resolve(1)
    .then((value) => value + 1)
    .then((value) => value + 1)
    .then((value) => value + 1)
    .then((value) => console.log(value + 1))


// Ok, pojdme udelat neco uzitecneho... naprogramujme si pomoci myPromise program, ktery nam obrati vsechny pismenka ve vete

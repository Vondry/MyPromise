function myPromise(value) {
    return {
        then: (func) => func(value)
    }
}

myPromise(1) // Promise.resolve(1)
    .then((value) => console.log(value + 1))

// Jak ale udelat, abychom mohli pouzit libovolne mnoztvi .then() ??
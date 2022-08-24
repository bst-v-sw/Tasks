//Event Loop

const timeout = setTimeout(() => {
    clearTimeout(timeout)
    console.log('After timeout')
}, 2500)

clearTimeout(timeout)

const interval = setInterval(() => {
    console.log('After timeout')
}, 1000)

clearTimeout(interval)

const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
}
delay (() => {
    console.log('After 2 seconds')
}, 2000)

const delay = (wait = 1000) =>{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, wait)
    })
    return promise
}

delay(2500)
    .then(() => {
        console.log('After 2 seconds')
    })
    .catch(err => console.error(err))
    .finally(() => console.log('Finally'))
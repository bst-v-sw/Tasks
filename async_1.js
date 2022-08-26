// //Event Loop
//
// const timeout = setTimeout(() => {
//     clearTimeout(timeout)
//     console.log('After timeout')
// }, 2500)
//
// clearTimeout(timeout)
//
// const interval = setInterval(() => {
//     console.log('After timeout')
// }, 1000)
//
// clearTimeout(interval)
//
// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }
// delay (() => {
//     console.log('After 2 seconds')
// }, 2000)
//
// const delay = (wait = 1000) =>{
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, wait)
//     })
//     return promise
// }
//
// delay(2500)
//     .then(() => {
//         console.log('After 2 seconds')
//     })
//     .catch(err => console.error(err))
//     .finally(() => console.log('Finally'))

// Промис при успешном выполнении
// let promise = new Promise(function(resolve, reject) {
//     // эта функция выполнится автоматически, при вызове new Promise
//
//     // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
//     setTimeout(() => resolve('done'), 1000);
// })
//
// //Промисы при ошибке
// let promise = new Promise(function(resolve, reject) {
//     // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// Использование async/await
async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("готово!"), 1000)
    });

    let result = await promise; // будет ждать, пока промис не выполнится (*)

    console.log(result); // "готово!"
}
f()
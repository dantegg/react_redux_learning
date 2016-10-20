/**
 * Created by dantegg on 16-10-20.
 */
function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max - min)) +min
}

export function fetchCounter(callback){
    setTimeout(()=>{
        callback(getRandomInt(1,100))
    },500)
}
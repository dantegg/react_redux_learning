/**
 * Created by dantegg on 16/9/10.
 */

export const RED_COLOR = 'RED_COLOR'
export const GREEN_COLOR = 'GREEN_COLOR'
export const BLUE_COLOR = 'BLUE_COLOR'


export function redColor(e) {
    console.log(e.target.value)
    return{
        type:RED_COLOR,
        rednum:parseInt(e.target.value)
    }
}


export function greenColor(e) {
    return{
        type:GREEN_COLOR,
        greennum:parseInt(e.target.value)
    }
}

export function blueColor(e) {
    return{
        type:BLUE_COLOR,
        bluenum:parseInt(e.target.value)
    }
}

// export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
// export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
//
// export function increment() {
//     return{
//         type:INCREMENT_COUNTER
//     }
// }
//
// export function decrement() {
//     return{
//         type:DECREMENT_COUNTER
//     }
// }

// export function incrementIfOdd() {
//     return(dispatch,getState) =>{
//         const {counter} = getState()
//
//         if(counter%2 ===0){
//             return
//         }
//         dispatch(increment())
//     }
// }
//
// export function incrementAsync(delay = 1000) {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(increment())
//         },delay)
//     }
// }
/**
 * Created by dantegg on 16/9/10.
 */
// import {INCREMENT_COUNTER,DECREMENT_COUNTER} from '../actions/counter'
//
// export default function counter(state =0,action) {
//     switch (action.type){
//         case INCREMENT_COUNTER:
//             return state + 1
//         case DECREMENT_COUNTER:
//             return state -1
//         default:
//             return state
//     }
// }

import {RED_COLOR,GREEN_COLOR,BLUE_COLOR} from '../actions/color'


//
// export default function mixColor(state='(0,0,0)',action) {
//     switch (action.type){
//         case RED_COLOR:
//             return state = '('+action.rednum+','
//
//     }
//
// }


export function red_color(state=0,action) {
    //console.log(action)
    if(action.type === RED_COLOR){
        console.log(action)
        return state = parseInt(action.rednum)
    }else{
        return parseInt(state)
    }
}

export function green_color(state=0,action) {
    //console.log(action)
    if(action.type === GREEN_COLOR){
        //console.log(action)
        return state = parseInt(action.greennum)
    }else{
        return parseInt(state)
    }
}

export function blue_color(state=0,action) {
    //console.log(action)
    if(action.type === BLUE_COLOR){
        return state = parseInt(action.bluenum)
    }else{
        return parseInt(state)
    }
}


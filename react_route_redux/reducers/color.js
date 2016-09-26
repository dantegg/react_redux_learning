/**
 * Created by dantegg on 16-9-12.
 */
import {RED_COLOR,GREEN_COLOR,BLUE_COLOR} from '../actions/color'

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
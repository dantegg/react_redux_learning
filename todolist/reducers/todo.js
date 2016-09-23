/**
 * Created by dantegg on 16-9-23.
 */
import {DEL_ITEM,ADD_ITEM} from '../actions/todo'


export function add_item(state=[],action) {

    if(action.type === ADD_ITEM){
        //console.log(action)
        return state.slice(0).concat({
            type:'add_todo',
            text:action.text
        })
    }else if(action.type === DEL_ITEM){
        var delindex = parseInt(action.index)

        var delstate = state
        console.log('beforestate',delstate)
        delstate.splice(delindex,1)
        console.log('new state',delstate)
        return Object.assign([],state)
    }else{
        return state
    }
}
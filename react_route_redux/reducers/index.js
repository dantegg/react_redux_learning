/**
 * Created by dantegg on 16-9-12.
 */
import {combineReducers} from 'redux'
import {red_color,green_color,blue_color} from './color'
import counter from './counter'
import {add_item} from './todo'



const rootReducer = combineReducers({
    red_color,
    green_color,
    blue_color,
    counter,
    add_item
})


export default rootReducer
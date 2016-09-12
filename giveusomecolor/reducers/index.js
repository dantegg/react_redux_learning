/**
 * Created by dantegg on 16-9-12.
 */
import {combineReducers} from 'redux'
import {red_color,green_color,blue_color} from './color'



const rootReducer = combineReducers({
    red_color,
    green_color,
    blue_color

})


export default rootReducer
/**
 * Created by dantegg on 16-9-23.
 */
import {combineReducers} from 'redux'
import {add_item} from './todo'


const rootReducer = combineReducers({
    add_item
})

export default rootReducer
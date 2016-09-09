/**
 * Created by dantegg on 16-9-9.
 */
import {combineReducers} from 'redux'
import counter from './counter'


const rootReducer = combineReducers({
    counter
})


export default rootReducer
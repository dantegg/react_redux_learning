/**
 * Created by dantegg on 16-9-12.
 */
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import createlogger from 'redux-logger'

const logger = createlogger()

const createStoreWithMiddleware = applyMiddleware(
    thunk,logger
)(createStore)

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducer, initialState)

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers')
            store.replaceReducer(nextReducer)
        })
    }

    return store
}
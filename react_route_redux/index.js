/**
 * Created by dantegg on 16-9-12.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Todo from './containers/TodoApp'
import configureStore from './store/configureStore'
const store = configureStore()
render(
    <Provider store={store}>
        <Todo/>
    </Provider>,
    document.getElementById('root')
)
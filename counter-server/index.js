/**
 * Created by dantegg on 16/9/8.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
//import SeeColor from './containers/ColorApp'
import  configureStore from './store/configureStore'
const store = configureStore()

render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
)
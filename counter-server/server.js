/**
 * Created by dantegg on 16-10-19.
 */
'use strict';


import path from 'path'
import qs from 'qs'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterApp from './reducers'
import App from './containers/App'

import ReactDOMServer from 'react-dom/server'


//import  { fetchCounter } from './api/counter'

const app = Express()
const port = 3000
app.use('/static', Express.static(__dirname + '/dist'));
app.use(handleRender)
app.use(renderFullPage)
function handleRender(req,res){

    // fetchCounter(apiResult=>{
    //     const params =
    // })
    const params = qs.parse(req.query)
    const counter = parseInt(params.counter) || 0

    let initialState = {counter}

    const store = createStore(counterApp,initialState)
    const html = ReactDOMServer.renderToString(
        <Provider store={store} >
            <App />
        </Provider>
    )
    const finalState = store.getState()
    res.send(renderFullPage(html,finalState))
}


function renderFullPage(html,initialState){
    return `    
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>redux counter server render</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port,()=>{
    console.log('listening at 3000')
})
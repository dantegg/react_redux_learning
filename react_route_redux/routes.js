/**
 * Created by dantegg on 16-9-26.
 */
import React from 'react'
import { render } from 'react-dom'
import {DefaultRoute,Link,Route,RouteHandler,Router,hashHistory,browserHistory,IndexRoute} from 'react-router'
import Todo from './containers/TodoApp'
import SeeColor from './containers/ColorApp'
import Counter from './containers/App'
import 'antd/dist/antd.css'
import { Menu } from 'antd'



class Roots extends React.Component{
    render(){

        return(
            <div>
                <Menu  mode="horizontal">
                <Menu.Item>
                    <Link to="/">counter</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/color">color</Link>
                </Menu.Item>
                <Menu.Item  >
                    <Link to="/todo">todo</Link>
                </Menu.Item>
                    </Menu>
                {this.props.children}
            </div>
        )
    }
}

const RouteConfig = (

        <Router history={browserHistory}>
            {/*使用browserHistory需要后台配合*/}
        <Route path="/" component={Roots}>
            <IndexRoute component={Counter}/>
            <Route path="counter" component={Counter} />
            <Route path="color" component={SeeColor}>
            </Route>
            <Route path="todo" component={Todo} >
            </Route>
        </Route>
    </Router>
)

export default RouteConfig
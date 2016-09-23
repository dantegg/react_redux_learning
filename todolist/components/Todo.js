/**
 * Created by dantegg on 16-9-23.
 */
import React,{ Component,PropTypes} from 'react'
import ReactDom from 'react-dom'
import 'antd/dist/antd.css'
import {Button,Input,Timeline} from 'antd'
//import  store from '../store/configureStore'

class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    componentDidMount(){
        console.log(this.state)
    }
    handleAdd = (e) => {
        //console.log(ReactDom.findDOMNode())
        //console.log('this',e)
        //var input = ReactDom.findDOMNode(this.refs.todo.refs.input.value)
        var input = ReactDom.findDOMNode(document.getElementById('todo'))
       // console.log(input)
        var value = input.value.trim()
        if(value){
            this.props.addItem(value)
            input.value = ''
        }
    }

    handleDel(e,z){
        console.log(e)

        this.props.delItem(parseInt(e))
        console.log('del',this.props.add_item)
        console.log(this.txt)
        //console.log('index',z)
    }

    render(){
        const timelineList = this.props.add_item
        console.log('timelineList',timelineList)
        var txt = []
        for(var i in this.props.add_item){
            txt.push(<Timeline.Item key={i}>{this.props.add_item[i].text}<Button type="default" onClick={this.handleDel.bind(this,i)}>delete</Button></Timeline.Item>)
        }
        //console.log(store)
        return (
            <div>
                <div>
                <Input size="large" id="todo" placeholder="add todo item" />
                <Button type="primary" onClick={this.handleAdd.bind(this)}>add</Button>
                </div>
                <div>
                    <Timeline>
                        {txt}
                        {/*{timelineList.map(function (e) {*/}
                            {/*return <Timeline.Item>{e.text}</Timeline.Item>*/}
                        {/*})}*/}
                    </Timeline>
                </div>
            </div>
        )
    }
}

export default Todo
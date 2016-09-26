/**
 * Created by dantegg on 16-9-12.
 */
import React, { Component,PropTypes } from 'react'
import 'antd/dist/antd.css'
import { InputNumber } from 'antd'




class SeeColor extends Component{

    constructor(props) {
        super(props);
        this.state={
        };
    }
    onChange(value){
        console.log('changed', value);
    }

    render() {

        //const {redColor, greenColor, blueColor, red_color, green_color, blue_color} = this.props
        // var divStyle={
        //     backgroundColor:rgb(red_color,green_color,blue_color),
        //     width:'100px',
        //     height:'100px'
        // }
        //console.log(this.props)
       // console.log(this.props.red_color)

        var colorString = "rgb("+this.props.red_color+","+this.props.green_color+","+this.props.blue_color+')'
        var divStyle={
            background:colorString,
            width:'100px',
            height:'100px',
            marginTop:'20px'
        }
        //console.log(divStyle)
        return (
            <div style={{width:'500px',margin:'auto',marginTop:'100px'}}>
                {/*<InputNumber min={1} max={10} defaultValue={3} onChange={this.onChange} />*/}
                <InputNumber  min={0} max={255} onChange={this.props.redColor} value={this.props.red_color}/>
                {" "}
                <InputNumber  min={0} max={255} onChange={this.props.greenColor} value={this.props.green_color}/>
                {" "}
                <InputNumber  min={0} max={255} onChange={this.props.blueColor} value={this.props.blue_color}/>
            <p>

            </p>
            <div style={divStyle}>
            {this.props.red_color}
        {this.props.green_color}
        {this.props.blue_color}
    </div>
        </div>
    )
    }
}


SeeColor.PropTypes = {
    redColor:PropTypes.func.isRequired,
    greenColor:PropTypes.func.isRequired,
    blueColor:PropTypes.func.isRequired,
    //mixColor:PropTypes.string.isRequired,
    red_color:PropTypes.number.isRequired,
    green_color:PropTypes.number.isRequired,
    blue_color:PropTypes.number.isRequired
}

export default SeeColor
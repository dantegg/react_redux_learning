/**
 * Created by dantegg on 16-9-12.
 */
import React, { Component,PropTypes } from 'react'
import 'antd/dist/antd.css'
import { InputNumber } from 'antd'


const onChange = (value)=> {
    console.log('changed', value);
}

class SeeColor extends Component{
    render() {

        const {redColor, greenColor, blueColor, red_color, green_color, blue_color} = this.props
        // var divStyle={
        //     backgroundColor:rgb(red_color,green_color,blue_color),
        //     width:'100px',
        //     height:'100px'
        // }
        console.log(this.props)
        console.log(red_color)

        var colorString = "rgb("+red_color+","+green_color+","+blue_color+')'
        var divStyle={
            background:colorString,
            width:'100px',
            height:'100px'
        }
        console.log(divStyle)
        return (
            <div>
                <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                <InputNumber  min={0} max={255} onChange={redColor} value={red_color}/>
                {" "}
                <InputNumber  min={0} max={255} onChange={greenColor} value={green_color}/>
                {" "}
                <InputNumber  min={0} max={255} onChange={blueColor} value={blue_color}/>
            <p>

            </p>
            <div style={divStyle}>
            {red_color}
        {green_color}
        {blue_color}
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
/**
 * Created by dantegg on 16-9-12.
 */
import React, { Component,PropTypes } from 'react'


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
            <p>
            <input type="number" onChange={redColor} value={red_color}/>
            {" "}
            <input type="number" onChange={greenColor} value={green_color}/>
            {" "}
            <input type="number" onChange={blueColor} value={blue_color}/>
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
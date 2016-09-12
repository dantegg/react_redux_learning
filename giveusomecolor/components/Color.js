/**
 * Created by dantegg on 16-9-12.
 */
import React, { Component,PropTypes } from 'react'


class SeeColor extends Component{
    render() {
        const {redColor, greenColor, blueColor, red_color, green_color, blue_color} = this.props
        console.log(this.props)
        return (

            <div>
            <p>
            <input type="number" onChange={redColor} value={red_color}/>
            {" "}
            <input type="number" onChange={greenColor} value={green_color}/>
            {" "}
            <input type="number" onChange={blueColor} value={blue_color}/>
            </p>
            <div>
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
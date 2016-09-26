/**
 * Created by dantegg on 16-9-9.
 */
import React,{Component,PropTypes} from 'react'
import { Row,Col,Button } from 'antd'

class Counter extends Component{
    render(){
        const {increment,incrementIfOdd,incrementAsync,decrement,counter} = this.props

        return(
            <Row style={{marginTop:'20px'}}>
                <Col span={12} offset={6}>
                    <p>
                        Clicked: {counter} times
                        {'  '}
                        <Button onClick={increment}>+</Button>
                        {'  '}
                        <Button onClick={decrement}>-</Button>
                        {'  '}
                        <Button onClick={incrementIfOdd}>increment if odd </Button>
                        {'  '}
                        <Button onClick={()=>incrementAsync()}>increment async</Button>
                    </p>
                </Col>

            </Row>
        )
    }
}

Counter.propTypes = {
    increment:PropTypes.func.isRequired,
    incrementIfOdd:PropTypes.func.isRequired,
    incrementAsync:PropTypes.func.isRequired,
    decrement:PropTypes.func.isRequired,
    counter:PropTypes.number.isRequired
}

export default Counter
/**
 * Created by dantegg on 16-9-12.
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SeeColor from '../components/Color'
import * as ColorActions from '../actions/color'


function mapStateToProps(state) {
    return{
        // mixColor:state.mixColor,
        red_color:state.red_color,
        green_color:state.green_color,
        blue_color:state.blue_color
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ColorActions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SeeColor)

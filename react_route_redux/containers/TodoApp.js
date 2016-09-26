/**
 * Created by dantegg on 16-9-26.
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Todo from '../components/Todo'
import * as TodoActions from '../actions/todo'


function mapStateToProps(state) {
    return {
        del_item:state.del_item,
        add_item:state.add_item
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(TodoActions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo)
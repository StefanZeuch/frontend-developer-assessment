import { connect } from "react-redux";
import Component from './component'
import { addShortListItem } from '../../../app/actions'

function mapStateToProps(state){
    var { searchReducer: { searchResults } } = state;
    var { shortListReducer: { shortList } } = state
    return {
        searchResults,
        shortList
    }
}

function mapDispatchToProps(dispatch) {
    return{
        addShortListItem(data){
            dispatch(addShortListItem(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
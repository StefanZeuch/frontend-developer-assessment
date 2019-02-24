import { connect } from 'react-redux'

import Component from './component'

import { addFavourite } from '../../../../app/actions'

function mapStateToProps(state) {
    var { favouriteReducer: { favourites } } = state;
    return {
        favourites
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addFavourite(data) {
            dispatch(addFavourite(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
import { connect } from "react-redux";

import { addFavourite } from "../../../../app/actions";

// Import component to wrap redux around
import ShortList from "./component";

function mapStateToProps(state) {
    var { 
        shortListReducer: { shortList } ,
        favouriteReducer: { favourites }
    } = state
    return {
        shortList,
        favourites
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addFavourite(data) {
            dispatch(addFavourite(data));
        },
    };
}

// Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(ShortList);
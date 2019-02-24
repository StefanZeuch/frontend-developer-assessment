import { connect } from "react-redux";

// Import component to wrap redux around
import FavouritesComponent from "./component.js";
import { removeFavourite } from "../../app/actions"

function mapStateToProps(state) {
    var { favouriteReducer: { favourites } } = state;
    return { favourites }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFavourite(id, type) {
            dispatch(removeFavourite(id, type))
        }
    }
}

// Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(FavouritesComponent);

import { connect } from "react-redux";
import SearchComponent from "./component";
import { searchChange } from "../../../app/actions";
import { searchResultsChange } from "../../../app/actions";

function mapStateToProps(state) {
    var {
        secretsReducer: { API_KEY },
        searchReducer: { searchText, searchResults },
    } = state;
    return {
        API_KEY,
        searchText,
        searchResults
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            searchChange(data) {
                dispatch(searchChange(data));
            },
            searchResultsChange(data) {
                dispatch(searchResultsChange(data));
            },
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);

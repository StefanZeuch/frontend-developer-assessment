import { SEARCH_CHANGE } from "../../../app/actions";
import { SEARCH_RESULTS_CHANGE } from '../../../app/actions'

const initialState = {
    searchText: "",
    searchResults: []
};

export default function (state = initialState, action) {
    var { type, data } = action;
    switch (type) {
        case SEARCH_CHANGE: {
            return {
                ...state,
                searchText: data,
            }
        }
        case SEARCH_RESULTS_CHANGE: {
            return {
                ...state,
                searchResults: data 
            }
        }
        default:
            return state;
    }
}

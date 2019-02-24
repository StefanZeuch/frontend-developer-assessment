import {
    ADD_FAVOURITE, REMOVE_FAVOURITE
} from "../../app/actions";

var initialFavouriteState = {
    favourites: []
};

export default function favouriteReducer(state = initialFavouriteState, action) {
    const { data, type } = action;

    switch (type) {
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [
                    ...state.favourites,
                    data,
                ]
            };

        case REMOVE_FAVOURITE:
            const { id, itemType } = data;
            if (itemType === "artist") {
                return {
                    ...state,
                    favourites: state.favourites.filter(item => item.data.mbid !== id)
                }
            }
            return {
                ...state,
                favourites: state.favourites.filter(item => item.data.id !== id)
            }
        default:
            return state;
    }
}

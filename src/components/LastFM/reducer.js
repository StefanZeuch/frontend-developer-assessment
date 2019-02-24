import { ADD_SHORT_LIST_ITEM } from "../../app/actions";

const initialState = {
    shortList: [],
};

export default function (state = initialState, action) {
    var { type, data } = action;
    switch (type) {
        case ADD_SHORT_LIST_ITEM: {
            return { 
                ...state,
                shortList: [...state.shortList, data]
            }
        }
        default:
            return state;
    }
}

import { combineReducers } from "redux";

import favouriteReducer from "../../components/Favourites/reducer"
import secretsReducer from "./secrets";
import searchReducer from "../../components/LastFM/Search/reducer";
import shortListReducer from '../../components/LastFM/reducer'
import musicBrainzReducer from '../../components/MusicBrainz/reducer'

// // Combine all the reducers
var rootReducer = combineReducers({
    favouriteReducer,
    searchReducer,
    secretsReducer,
    shortListReducer,
    musicBrainzReducer
});

export default rootReducer;

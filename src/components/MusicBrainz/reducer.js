import { MUSICBRAINZ_SEARCH_CHANGE, MUSICBRAINZ_SEARCH_RESULTS_CHANGE } from '../../app/actions'

const initialState = {
    searchTextMusicBrainz: "",
    searchResultsMusicBrainz: []
}

export default function (state = initialState, action) {
    var { type, data } = action
    switch (type) {
        case MUSICBRAINZ_SEARCH_CHANGE:
            return {
                ...state,
                searchTextMusicBrainz: data
            }
        case MUSICBRAINZ_SEARCH_RESULTS_CHANGE:
            return {
                ...state,
                searchResultsMusicBrainz: data
            }
        default:
            return state
    }

}
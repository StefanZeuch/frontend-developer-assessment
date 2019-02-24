export const SEARCH_CHANGE = "SEARCH_CHANGE";
export const SEARCH_RESULTS_CHANGE = "SEARCH_RESULTS_CHANGE";
export const ADD_SHORT_LIST_ITEM = "ADD_SHORT_LIST_ITEM";
export const ADD_FAVOURITE = "ADD_FAVOURITE";

export const MUSICBRAINZ_SEARCH_CHANGE = "MUSICBRAINZ_SEARCH_CHANGE"
export const MUSICBRAINZ_SEARCH_RESULTS_CHANGE = "MUSICBRAINZ_SEARCH_RESULTS_CHANGE"
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE"

export const removeFavourite = (id, type) => ({
    type: REMOVE_FAVOURITE, data: { id, itemType: type }
})

export function searchChange(data) {
    return {
        type: SEARCH_CHANGE,
        data
    };
}

export function searchResultsChange(data) {
    return {
        type: SEARCH_RESULTS_CHANGE,
        data
    }
}

export function addShortListItem(data) {
    return {
        type: ADD_SHORT_LIST_ITEM,
        data
    }
}

export function addFavourite(favourite) {
    return {
        type: ADD_FAVOURITE,
        data: favourite
    }
}

export function searchChangeMusicBrainz(data) {
    return {
        type: MUSICBRAINZ_SEARCH_CHANGE,
        data
    }
}

export function searchResultsChangeMusicBrainz(data) {
    return {
        type: MUSICBRAINZ_SEARCH_RESULTS_CHANGE,
        data
    }
}
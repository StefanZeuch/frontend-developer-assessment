import { connect } from 'react-redux'

import { searchResultsChangeMusicBrainz } from '../../../app/actions'

import Component from './component'

function mapStateToProps(state) {
    var { musicBrainzReducer: { searchTextMusicBrainz, searchResultsMusicBrainz } } = state;
    return {
        searchTextMusicBrainz,
        searchResultsMusicBrainz
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchResultsChangeMusicBrainz(data) {
            dispatch(searchResultsChangeMusicBrainz(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
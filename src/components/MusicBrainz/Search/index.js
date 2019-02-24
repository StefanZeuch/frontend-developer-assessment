import { connect } from 'react-redux'

import { searchChangeMusicBrainz, searchResultsChangeMusicBrainz } from '../../../app/actions'

import Component from './component'

function mapStateToProps(state){
    var { musicBrainzReducer: { searchTextMusicBrainz } } = state
    return{
        searchTextMusicBrainz
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: {
            searchChangeMusicBrainz(data){
                dispatch(searchChangeMusicBrainz(data));
            },
            searchResultsChangeMusicBrainz(data){
                dispatch(searchResultsChangeMusicBrainz(data));
            }
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
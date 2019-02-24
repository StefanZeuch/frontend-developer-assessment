import React, { Component } from "react";
import { debounce } from 'lodash';

class Search extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = debounce(this.handleSubmit.bind(this), 500);
    }

    async handleSubmit(e) {
        if (e) {
            e.preventDefault();
        }

        var { searchTextMusicBrainz } = this.props;

        var URL = `https://musicbrainz.org/ws/2/artist/?query=${searchTextMusicBrainz}&fmt=json&limit=10`

        try {
            var response = await fetch(URL);
            var data = await response.json();
            var { artists } = data
            var { actions: { searchResultsChangeMusicBrainz } } = this.props;

            searchResultsChangeMusicBrainz(artists);

        } catch (error) {
            console.error(error)
        }
    }

    handleChange(e) {
        var { actions: { searchChangeMusicBrainz } } = this.props;
        searchChangeMusicBrainz(e.target.value);
        this.handleSubmit();
    }

    render() {

        var { searchTextMusicBrainz } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Music Brainz Search</h2>
                            <div className="form-group">
                                <input type="text" className="form-control" id="searchInput" placeholder="Artist name"
                                    value={searchTextMusicBrainz} onChange={this.handleChange} required autoComplete="off" />
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;

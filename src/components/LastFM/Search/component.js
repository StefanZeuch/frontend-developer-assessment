import React, { Component } from "react";
import { debounce } from "lodash";

class Search extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = debounce(this.handleSubmit.bind(this), 500);
    }

    handleChange(event) {
        var { actions: { searchChange } } = this.props;
        searchChange(event.target.value);
        this.handleSubmit();
    }

    async handleSubmit(e) {
        if (e) {
            e.preventDefault();
        }
        var {
            API_KEY,
            searchText,
            actions: { searchResultsChange }
        } = this.props;

        var URL = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchText}` +
            `&api_key=${API_KEY}&format=json&limit=10`;

        try {
            var response = await fetch(URL);
            var data = await response.json();
            var { results: { artistmatches: { artist } } } = data;
            searchResultsChange(artist)
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        var { searchText } = this.props;

        return (
            <div className="search">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Search</h2>
                            <div className="form-group">
                                <input type="text" className="form-control" id="searchInput" placeholder="Artist name"
                                    value={searchText} onChange={this.handleChange} required autoComplete="off" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;

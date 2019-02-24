import React, { Component } from "react";

import Result from './Result/index'
import './styles.scss'

class Results extends Component {
    renderSearchResults() {
        var { searchResultsMusicBrainz } = this.props;
        if (!searchResultsMusicBrainz || !searchResultsMusicBrainz.length) return null;
        return searchResultsMusicBrainz.map((result) => (
            <Result name={result.name} id={result.id} key={result.id} />
        ));
    }

    render() {
        var { searchResultsMusicBrainz } = this.props;
        if (!searchResultsMusicBrainz || searchResultsMusicBrainz.length === 0) return null;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="pt-4">Search Results</h2>
                        <div className="search-results-container">
                            {this.renderSearchResults()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;

import React, { Component } from "react";
import Search from './Search'
import Results from './Results'

class MusicBrainz extends Component {
    render() {
        return (
            <div>
                <Search />
                <Results />
            </div>
        );
    }
}

export default MusicBrainz;

import React, { Component } from "react";
import Search from "./Search"
import ArtistsSearchTable from "./ArtistsSearchTable"

class LastFM extends Component {
    render() {
        return (
            <div>
                <Search />
                <ArtistsSearchTable />
            </div>
        );
    }
}

export default LastFM;

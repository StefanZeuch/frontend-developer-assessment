import React, { Component } from "react";
import ShortList from "./ShortList"

class ArtistsSearchTable extends Component {

    constructor(props) {
        super(props);
        this.handleShortList = this.handleShortList.bind(this);
        this.toggleShortListVisibility = this.toggleShortListVisibility.bind(this);

        this.state = {
            shortListVisible: true,
        }
    }

    handleShortList(item) {
        return () => {
            var { addShortListItem, shortList } = this.props;
            if (!shortList.includes(item)) {
                addShortListItem(item);
            }
        }
    }

    toggleShortListVisibility() {
        this.setState({
            shortListVisible: !this.state.shortListVisible
        })
    }

    renderResults() {
        var { searchResults } = this.props;
        if (!searchResults || !searchResults.length) return null;
        return searchResults.map((result, index) => {
            return <tr key={index}>
                <td><img src={result.image[1]["#text"]} alt="" /></td>
                <td>{result.name}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.handleShortList(result)}>
                        Add to shortlist
                    </button>
                </td>
            </tr>
        })
    }

    render() {
        var { searchResults } = this.props;
        if (!searchResults || searchResults.length === 0) return null;

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="pt-4">Search Results</h2>
                            <button type="button" className="btn btn-primary mb-2 float-right" onClick={this.toggleShortListVisibility}>Toggle Shortlist</button>
                            <div style={{ maxHeight: "400px", overflowY: "scroll", width: "100%" }}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Featured Image</th>
                                            <th scope="col">Artist Name</th>
                                            <th scope="col">Short list</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderResults()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <ShortList visible={this.state.shortListVisible}></ShortList>
            </div>
        );
    }
}

export default ArtistsSearchTable;

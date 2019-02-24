import React, { Component } from "react";
import { get } from 'lodash';

class Result extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            isFetching: false,
            releases: []
        }

        this.handleFavorite = this.handleFavorite.bind(this);
    }

    releaseButtonText() {
        var { isOpen } = this.state;
        if (isOpen) {
            return "Hide Releases"
        }
        return "Show Releases"
    }

    async fetchReleases() {
        var { id } = this.props;
        var URL = `http://musicbrainz.org/ws/2/release/?query=arid:${id}&fmt=json`
        try {
            var response = await fetch(URL);
            var data = await response.json();
            var { releases } = data;
            this.setState({ releases, isFetching: false, })
        } catch (error) {
            console.error(error);
        }
    }

    toggleReleasesView() {
        // Toggle Open
        this.setState((state) => {
            return {
                isOpen: !state.isOpen,
                isFetching: !state.isFetching,
            }
        });
        // Fetch releases if dont have releases
        var { releases } = this.state;
        if (!releases || releases.length === 0) {
            this.fetchReleases();
        }
    }

    renderReleases() {
        var { favourites } = this.props;
        var { releases, isFetching } = this.state;
        if (isFetching) return (
            <tr>
                <td colSpan="4">
                    <p>Fetching data...</p>
                </td>
            </tr>
        )
        return releases.map(release => {
            var releaseDate = get(release, 'date');
            var title = get(release, 'title');
            var label = get(release, 'label-info.0.label.name');
            var tracksCount = get(release, 'track-count');

            var isFavourited = favourites.find(item => item.data.id === release.id);

            return (
                <tr key={release.id}>
                    <td>{releaseDate ? releaseDate.substr(0, 4) : ''}</td>
                    <td>{title ? title : ''}</td>
                    <td>{label ? label : ''}</td>
                    <td>{tracksCount ? tracksCount : ''}</td>
                    <td>
                        {!isFavourited && (
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.handleFavorite(release)}
                            >
                              Add to favourites
                            </button>
                        )}
                    </td>
                </tr>
            )
        })
    }

    handleFavorite(release) {
        return () => {
            var { favourites, addFavourite } = this.props;
            var newRelease = {
                type: 'release',
                data: release,
            }
            if (!favourites.includes(newRelease)) {
                addFavourite(newRelease)
            }
        }
    }

    render() {
        var { name } = this.props;
        var { isOpen } = this.state;

        return (
            <div className="search-results-item">
                <div className="result-top">
                    <div className="name-container">
                        {name}
                    </div>
                    <div className="button-container">
                        <button
                            type="button"
                            className="btn btn-primary float-right"
                            onClick={() => { this.toggleReleasesView() }}
                        >
                            {this.releaseButtonText()}
                        </button>
                    </div>
                </div>

                <div className="result-bottom">
                    {isOpen && (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Year</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Release Label</th>
                                    <th scope="col">Number of tracks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderReleases()}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        );
    }
}

export default Result;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { get } from 'lodash'

class Favourites extends Component {
    static propTypes = {
        favourites: PropTypes.array,
    };

    constructor(props) {
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(id, type) {
        return () => {
            const { removeFavourite } = this.props;
            removeFavourite(id, type);
        }
    }

    render() {
        var { favourites } = this.props;
        if (!favourites || favourites.length === 0) return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>You have not set any favourites.</p>
                        </div>
                    </div>
                </div>
            </div>
        )

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Favourites</h2>
                            <h3 className="mt-4">Favourite Artists</h3>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Artist Name</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(favourites)
                                        .filter((key) => {
                                            return favourites[key].type === 'artist';
                                        })
                                        .map((key) => {
                                            return <tr key={key}>
                                                <td>{favourites[key].data.name}</td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={this.handleRemove(favourites[key].data.mbid, favourites[key].type)}
                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        })}
                                </tbody>
                            </table>
                            <h3 className="mt-4">Favourite Releases</h3>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Artist Name</th>
                                        <th>Release Title</th>
                                        <th>Year</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(favourites)
                                        .filter((key) => {
                                            return favourites[key].type === 'release';
                                        })
                                        .map((key) => {
                                            var releaseDate = get(favourites[key].data, 'date')
                                            return <tr key={key}>
                                                <td>{favourites[key].data["artist-credit"][0].artist.name}</td>
                                                <td>{favourites[key].data.title}</td>
                                                <td>{releaseDate ? releaseDate.substr(0, 4) : ''}</td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={this.handleRemove(favourites[key].data.id, favourites[key].type)}
                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Favourites;

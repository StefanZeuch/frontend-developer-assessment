import React, { Component } from "react";

class ShortList extends Component {
    constructor(props) {
        super(props);
        this.handleFavourite = this.handleFavourite.bind(this);
    }

    handleFavourite(favourite) {
        return () => {
            var { addFavourite } = this.props;
            var newFavourite = {
                type: 'artist',
                data: favourite,
            }
            if (!this.isFavourited(favourite.mbid)) {
                addFavourite(newFavourite)
            }
        }
    }

    isFavourited(id) {
        const { favourites } = this.props;
        return !!favourites.find(item => item.data.mbid === id)
    }

    render() {
        var {
            shortList,
            visible
        } = this.props;

        if (!visible) {
            return null
        }

        return (
            <div className="short-list">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2 className="pt-4">Short List</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Artist Name</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {shortList.map((listItem, index) => (
                                        <tr key={index}>
                                            <td>{listItem.name}</td>
                                            <td>
                                                {!this.isFavourited(listItem.mbid) && (
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={this.handleFavourite(listItem)}
                                                    >Add to favourites
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShortList;

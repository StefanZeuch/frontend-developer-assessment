import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppRouter from "./router";

class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav>
                                    <ul>
                                        <li><Link to="/">LastFM</Link></li>
                                        <li><Link to="/musicbrainz">MusicBrainz</Link></li>
                                        <li><Link to="/favourites">Favourites</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                <AppRouter/>
            </div>
        );
    }
}

export default App;

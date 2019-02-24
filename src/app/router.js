import React from "react";
import { Route, Switch } from "react-router-dom";
import { Favourites, LastFM, MusicBrainz } from "../components";

export default () => (
    <Switch>
        <Route exact path="/" component={LastFM}/>
        <Route path="/musicbrainz" component={MusicBrainz}/>
        <Route path="/favourites" component={Favourites}/>
    </Switch>
);

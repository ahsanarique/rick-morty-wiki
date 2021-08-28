// Libraries
import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Homepage from "./Pages/Homepage/Homepage";
import CharacterListPage from "./Pages/CharacterListPage/CharacterListPage";
import EpisodeListPage from "./Pages/EpisodeListPage/EpisodeListPage";
import LocationListPage from "./Pages/LocationListPage/LocationListPage";
import SingleCharacterPage from "./Pages/SingleCharacterPage/SingleCharacterPage";
import SingleEpisodePage from "./Pages/SingleEpisodePage/SingleEpisodePage";
import SingleLocationPage from "./Pages/SingleLocationPage/SingleLocationPage";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/characterListPage">
          <CharacterListPage />
        </Route>

        <Route path="/episodeListPage">
          <EpisodeListPage />
        </Route>

        <Route path="/locationListPage">
          <LocationListPage />
        </Route>

        <Route path="/singleCharacterPage=:id">
          <SingleCharacterPage />
        </Route>

        <Route path="/singleEpisodePage=:id">
          <SingleEpisodePage />
        </Route>

        <Route path="/singleLocationPage">
          <SingleLocationPage />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;

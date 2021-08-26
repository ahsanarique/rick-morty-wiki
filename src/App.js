// Libraries
import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Homepage from "./Pages/Homepage/Homepage";
import CharacterListPage from "./Pages/CharacterListPage/CharacterListPage";
import EpisodeListPage from "./Pages/EpisodeListPage/EpisodeListPage";
import SingleCharacterPage from "./Pages/SingleCharacterPage/SingleCharacterPage";
import SingleEpisodePage from "./Pages/SingleEpisodePage/SingleEpisodePage";

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

        <Route path="/singleCharacterPage=:id">
          <SingleCharacterPage />
        </Route>

        <Route path="/singleEpisodePage=:id">
          <SingleEpisodePage />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;

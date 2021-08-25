// Libraries
import React from "react";
import { Switch, Route } from "react-router-dom";

// Components + Pages
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Homepage from "./Pages/Homepage/Homepage";
import CharacterListPage from "./Pages/CharacterListPage/CharacterListPage";
import EpisodeListPage from "./Pages/EpisodeListPage/EpisodeListPage";
import SingleCharacterPage from "./Pages/SingleCharacterPage/SingleCharacterPage";
import SingleEpisodePage from "./Pages/SingleEpisodePage/SingleEpisodePage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />

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

      <Footer />
    </React.Fragment>
  );
}

export default App;

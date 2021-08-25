import React from "react";
import Search from "../../Components/Search/Search";
import EpisodeList from "../../Components/EpisodeList/EpisodeList";

const EpisodeListPage = () => {
  return (
    <main>
      <Search />
      <EpisodeList />
    </main>
  );
};

export default EpisodeListPage;

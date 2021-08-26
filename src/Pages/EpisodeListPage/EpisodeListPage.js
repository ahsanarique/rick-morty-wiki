import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";

import EpisodeList from "../../Components/EpisodeList/EpisodeList";
import Footer from "../../Components/Footer/Footer";

const EpisodeListPage = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <EpisodeList />
      </main>
      <Footer />
    </>
  );
};

export default EpisodeListPage;

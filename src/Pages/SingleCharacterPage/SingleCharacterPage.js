import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import SingleCharacter from "../../Components/SingleCharacter/SingleCharacter";
import EpisodeList from "../../Components/EpisodeList/EpisodeList";
import Footer from "../../Components/Footer/Footer";

const SingleCharacterPage = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <SingleCharacter />
        <EpisodeList />
      </main>
      <Footer />
    </>
  );
};

export default SingleCharacterPage;

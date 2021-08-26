import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import SingleEpisode from "../../Components/SingleEpisode/SingleEpisode";
import CharacterList from "../../Components/CharacterList/CharacterList";
import Footer from "../../Components/Footer/Footer";

const SingleEpisodePage = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <SingleEpisode />
        <CharacterList />
      </main>
      <Footer />
    </>
  );
};

export default SingleEpisodePage;

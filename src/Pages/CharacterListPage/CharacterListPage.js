import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Search from "../../Components/Search/Search";
import CharacterList from "../../Components/CharacterList/CharacterList";
import Footer from "../../Components/Footer/Footer";

const CharacterListPage = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <Search />
        <CharacterList />
      </main>
      <Footer />
    </>
  );
};

export default CharacterListPage;

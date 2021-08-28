import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import LocationList from "../../Components/LocationList/LocationList";
import Footer from "../../Components/Footer/Footer";

const LocationListPage = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <LocationList />
      </main>
      <Footer />
    </>
  );
};

export default LocationListPage;

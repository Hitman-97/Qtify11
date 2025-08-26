import { useEffect, useState } from "react";
// import "./App.css";
import Card from "./components/Card/Card";
//@ts-ignore
import NavBar from "./components/NavBar/NavBar";
import { fetchTopAlbums } from "./components/api/api";
import Section from "./components/Sections/Section";

function App() {

  return (
    <div className="App">
      <NavBar />
      {/* <HeroSection />
      <div className="sectionWrapper" >
      <Section type="album" title="Top Albums" data={topAlbumData} />
      </div> */}
      {/* <div className="cardContainer">
      {topAlbumData.map((item) => {
        return <Card key={item.id} data={item} type="album" />;
      })}
      </div> */}
    </div>
  );
}

export default App;

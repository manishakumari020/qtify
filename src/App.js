import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbum } from "./Api/api";
import Section from "./components/Section/Section";

function App() {
  const [data, setData] = useState([]);

  const createData = async () => {
    try {
      const fetchData = await fetchTopAlbum();
      console.log(fetchData);
      setData(fetchData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    createData();
  }, []);

  return (
    <>
      <NavBar />
      <Hero />
      <Section data={data} type="album" title="Top Album"/>
    </>
  );
}

export default App;

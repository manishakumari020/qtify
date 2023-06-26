import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbum, newAlbum, songs } from "./Api/api";
import Section from "./components/Section/Section";
import Faq from "./components/FaqSection/FaqSection";
import styles from "./App.module.css";


function App() {
  const [data, setData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [songData, setSongData] = useState([]);
  ///const [genreData, setGenreData] = useState([])

  const createData = async () => {
    try {
      const fetchData = await fetchTopAlbum();
      //console.log(fetchData);
      setData(fetchData);
    } catch (err) {
      console.log(err);
    }
  };

  const generateNewAlbumData = async() => {
    try{
      const fetchNewAlbumData = await newAlbum();
      setNewAlbumData(fetchNewAlbumData);
    }
    catch(err){
      console.log(err);
    }
  }

  const generateSongsData = async() => {
    try{
      const fetchSongData = await songs();
      setSongData(fetchSongData);
    }
    catch(err){
      console.log(err);
    }
  }

  const filteredData = (val) => {
    setSongData(val)
  }

  // const generategenreData = async() => {
  //   try{
  //     const fetchGenreData = await genre();
  //     setGenreData(fetchGenreData);
  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  // }

  useEffect(() => {
    createData();
    generateNewAlbumData();
    generateSongsData();
   // generategenreData();
  }, []);

  return (
    <>
      <NavBar />
      <Hero />
      <div className={styles.cardSectionWrapper}>
        <Section data={data} type="album" title="Top Album"/>
        <Section data={newAlbumData} type="album" title="New Album"/>
      </div>
      <hr />
      <div className={styles.cardSectionWrapper}>
        <Section data={songData} type="song"  title="Songs" filteredData={filteredData}/>
      </div>
      <hr style={{colors: "green"}} />
      <Faq />
    </>
  );
}

export default App;

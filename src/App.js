import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import Pagination from "./components/pagination";
function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo]= useState({});
  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (initialUrl) => {
    fetch(initialUrl)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };
  const onPrevius = () =>{
    fetchCharacters(info.prev);
  }
  const onNext = () =>{
    fetchCharacters(info.next );
  }
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty" />
      <div className="container mt-4">
        <Pagination info={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext}/>
        <Characters characters={characters}/>
        <Pagination info={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext}/>
      </div>
    </>
  );
}

export default App;

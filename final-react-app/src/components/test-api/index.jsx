import React, { useEffect, useState } from "react";
import DataPlayers from './DataPlayers';
import './TestAPI.css';

function TestAPI() {
  const [players, setPlayers] = useState([]);

  useEffect(()=>{
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c0abc93e1amsh3e5572e73a96623p1b8a08jsn9c550539021d',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	}
};

fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25', options)
.then(response=>response.json())
.then(response=>{
  setPlayers(response.data);
  console.log(response.data)})

  .catch(error=>console.error(error));



  }, []);
    return (
      <>
      <div className="divh1">
        <div className="h1">Игроки</div>
      </div>

      <DataPlayers players={players}/>

      </>
    );
  }
  
  export default TestAPI;
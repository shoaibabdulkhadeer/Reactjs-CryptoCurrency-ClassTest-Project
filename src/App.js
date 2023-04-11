import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoinsItem from './components/CoinsItem';




function App() {

const [coins,setCoins] = useState([])

useEffect(() => {
 axios.get('https://api.coinranking.com/v2/coins').then((response) =>{
  setCoins(response.data.data.coins)
  console.log(response.data.data.coins)
 })
},[])



  return (
    <div className="App">

       <CoinsItem  coins = {coins}/>

    </div> 
  );
}

export default App;

import './App.css';
import Header from './Components/Header';
import { useState,useEffect } from 'react';
import Product from "./Product.json";

function App() {

  const [money, setMoney] = useState(100)
  
  return (
 <>
 <Header money = {money} />
 </>
  );
}

export default App;

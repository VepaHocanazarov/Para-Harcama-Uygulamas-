import './App.css';
import Header from './Components/Header';
import { useState, useEffect } from 'react';
import Products from "./Products.json";
import Product from './Components/Product';
import Basket from './Components/Basket';
import "./Styles/App.css"

function App() {

  const [money, setMoney] = useState(1000000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)


  const resetBasket = ()=>{
    setBasket ([])
  }

  useEffect(() => {

    setTotal(
      basket.reduce((acc, item) => {
        return acc + (item.amount * (Products.find(product => product.id === item.id).price))
      }, 0)
    )


  }, [basket])

  return (
    <>
      <Header total = {total} money={money} />

      <div className="container products">
      {Products.map(product => (
        <Product basket={basket}  total = {total} money={money}  setBasket={setBasket} key={product.id} product={product} />
      ))}

      </div>

      {total > 0 && (
      <Basket resetBasket={resetBasket}  Products = {Products}  total = {total} basket ={basket} />

      )}

    </>
  );
}

export default App;

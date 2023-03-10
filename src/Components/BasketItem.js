import React from 'react';
import "../Styles/Basket.css"


export default function BasketItem({ item, product }) {
  return (
    <>
      <li className='basketItem'>
        {product.title} <span> x {item.amount}</span>
      </li>
    </>
  )
}


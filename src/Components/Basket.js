import React from 'react'
import BasketItem from './BasketItem';
import "../Styles/Basket.css"

export default function Basket({ basket, Products, total, resetBasket }) {
    return (
        <>

            <div className="basket-container container">
                <h1>Alışveriş Detayları</h1>
                <ul>
                    {
                        basket.map(item => (
                            <BasketItem key={item.id} item={item} product={Products.find(p => p.id === item.id)} />
                        ))
                    }
                </ul>

                <div className='total'>
                    Toplam: ${total}
                </div>
                <button className='basket-reset-btn' onClick={resetBasket} >Sepeti Sıfırla</button>
            </div>

        </>
    )
}

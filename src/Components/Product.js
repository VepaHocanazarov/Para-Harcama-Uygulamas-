import React from 'react';
import "../Styles/Product.css";


export default function Product({ product, basket, setBasket,total,money }) {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)

        //Ürün daha önce eklenmiş

        if (checkBasket) {
            checkBasket.amount += 1

            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        {
            const currentBasket = basket.find(item => item.id === product.id)
            const basketWithoutCurrent = basket.filter(item=>item.id !== product.id)

            //Ürün daha önce eklenmiş
            currentBasket.amount -= 1
            if (currentBasket.amount === 0) {
                setBasket([...basketWithoutCurrent])
            } else {
                setBasket([...basketWithoutCurrent, currentBasket])

            }
        }
    }
    return (
        <>
            <div className="product">
                <img src={product.image} alt="" />
                <h6> {product.title} </h6>
                <div className="price"> $ {product.price}</div>
                <div className="actions">
                    <button className='sell-btn' disabled={!basketItem} onClick={removeBasket}>Sat</button>
                    <span className='amount'> {basketItem && basketItem.amount || 0} </span>
                    <button className='buy-btn' disabled={total + product.price > money} onClick={addBasket}>Satın Al</button>

                </div>
                {/* <style jsx > {`
                .product{
                    padding:15px;
                    background:#fff;
                    border:1px solid #ddd;
                    margin-bottom:20px;
                    width:50%;
                }
                `} </style> */}
            </div>
        </>)
}

import React from 'react';
import { moneyFormat } from '../helpers';
import "../Styles/Header.css"

export default function Header({money,total}) {
  return (
    
    <>

        {total > 0 && total !== 0 && (
           <div className='header' >  Harcayacak <span>$ {money - total} </span> Paranız Kaldı!</div>
        ) }
        {total === 0 && (
        <div className='header' >Harcamak İçin  <span> $ {money}</span>  Paranız var!</div>
        )}

        {money - total === 0 &&(
            <div className='header' > Paran Bitti evlat, Parasız insan boş insandır! </div>
        )}

    </>
  )
}

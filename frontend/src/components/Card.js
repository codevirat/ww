import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import Button from './Button';
import Title from './Title';
import Price from './Price';

const Card = ({ product, addToCart, preview }) => {
    const [ show, setShow ] = useState(false);
    return (
        <div onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} className="product__card">
            <Image src={product.medias[0].url} rounded className="img-fluid product__image pointer" onClick={preview}  />
                    <Title name={product.name} onClick={preview}  />
                    <Price price={product.retailPrice} onClick={preview} />
                    {show && <Button title="Add to Cart" onClick={addToCart} />}
                    {!show&&<div style={{height:30}}></div>}
        </div>
    )
}

export default Card;

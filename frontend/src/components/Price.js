import React from 'react'

const Price = ({ price, onClick }) => {
    return (
        <div className="product__amount pointer" onClick={onClick}>
            ${price}
        </div>
    )
}

export default Price

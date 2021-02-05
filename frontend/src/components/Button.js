import React from 'react'

const Button = ({ title, onClick }) => {
    return (
    <button className="product__button pointer" onClick={onClick}>{title}</button>
    )
}

export default Button

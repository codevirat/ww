import React from 'react'

const Title = ({ name, onClick }) => {
    return (
        <div className="product__title pointer" onClick={onClick} >
            {name}
        </div>
    )
}

export default Title

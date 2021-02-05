import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';

const Header = ({ cart }) => {
    const [ count, setCount ] = useState(0);

    useEffect(()=>{
        if(cart) {
            setCount(cart.count);
        }
    },[cart])

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>
            Weight Watchers
            </Navbar.Brand>
            <div className="text-end ml-auto">
                <img src="/cart.png" height="30"/>
                <span className="cart__count">{count}</span>
            </div>
        </Navbar>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(
    mapStateToProps, {
    }
) (Header);
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getProducts, updateCart } from '../service/action/product';
import Card from '../components/Card';

const Home = ({ history, getProducts, updateCart, cart }) => {
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(()=>{
        fetchProducts();
    },[])

    const fetchProducts = async () => {
        setLoading(true);
        const response = await getProducts();
        if(response.success) {
            setProducts(response.data);
        } else {
            // error in fetching products
            console.log(response.data);
        }
        setLoading(false);
    }

    const addToCart = async () => {
        await updateCart(cart.count+1);
    }

    const preview = (product) => {
        history.push('/preview/'+product.id)
    }

    return (
        <Container className="mt-5">
            <Row className="m-auto">
                {loading ? 'Loading ......' : (
                products && products.length > 0 && products.map(product =>
                <Col key={product.id} xs={6} md={4} sm={6} className="text-center align-items-stretch" style={{height:'48vh'}}>
                    <Card product={product} preview={()=>preview(product)} addToCart={addToCart} />
                </Col>
                )
                )}
            </Row>
        </Container>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(
    mapStateToProps, {
        getProducts, updateCart
    }
) (Home);
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { popularMenuFood } from '../../Assets/FakeData/Products';
import ProductCard from './ProductCard/ProductCard';

const PopularMenu = () => {
    return (
        <Container className='mb-5'>
            <Row>
                <Col lg='12' className='mt-5'>
                    <h2>Popular Food Menu</h2>
                </Col>
                {popularMenuFood.map(item => (
                    <Col lg='3' key={item.id}>
                        <ProductCard item={item}/>
                    </Col>)
                )}
            </Row>
        </Container>

    );
};

export default PopularMenu;
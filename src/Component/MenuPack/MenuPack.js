import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { fastFoodProducts, riceMenuProducts, dessertProducts, pizzaProducts, coffeeProducts } from '../../Assets/FakeData/Products';
import ProductCard from '../PopularMenu/ProductCard/ProductCard';
import './MenuPack.css';

const MenuPack = () => {
    const [filter,setFilter] = useState('Fast-Food');
    const [products,setProducts] = useState(fastFoodProducts);

    useEffect(()=>{
        if(filter === 'Rice-Menu'){
            setProducts(riceMenuProducts)
        }
        if(filter === 'Fast-Food'){
            setProducts(fastFoodProducts)
        }
        if(filter === 'Pizza'){
            setProducts(pizzaProducts)
        }
        if(filter === 'Dessert'){
            setProducts(dessertProducts)
        }
        if(filter === 'Coffee'){
            setProducts(coffeeProducts)
        }
    },[filter])
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='text-center mb-5'><h3 className='ourMenu'>Our Menu Pack</h3></Col>
                        <Col lg='12' className='text-center mb-4'>
                            <button className={`filter-btn ${filter==='Fast-Food'? 'active_btn': ''}`} onClick={()=>setFilter('Fast-Food')}>Fast Food</button>
                            <button className={`filter-btn ${filter==='Rice-Menu'? 'active_btn': ''}`} onClick={()=>setFilter('Rice-Menu')} >Rice Menu</button>
                            <button className={`filter-btn ${filter==='Pizza'? 'active_btn': ''}`} onClick={()=>setFilter('Pizza')}>Pizza</button>
                            <button className={`filter-btn ${filter==='Dessert'? 'active_btn': ''}`} onClick={()=>setFilter('Dessert')}>Desserts Menu</button>
                            <button className={`filter-btn ${filter==='Coffee'? 'active_btn': ''}`} onClick={()=>setFilter('Coffee')}>Coffee</button>
                        </Col>
                        {
                            products.map(item =>(
                                <Col lg='3' key={item.id}><ProductCard item={item}></ProductCard></Col>
                            ))
                        }
                </Row>
            </Container>
        </section>
    );
};

export default MenuPack;
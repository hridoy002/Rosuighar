import React from 'react';
import './ProductCard.css';

const ProductCard = (props) => {
    const {title,imgUrl,price} = props.item
    return (
        <div className="single_product">
                            <div className="product_img">
                                <img className='w-100' src={imgUrl} alt="" />
                            </div>
                            <div className="product_content">
                                <div className="rating text-center">
                                    <span><i class="ri-star-s-fill"></i></span>
                                    <span><i class="ri-star-s-fill"></i></span>
                                    <span><i class="ri-star-s-fill"></i></span>
                                    <span><i class="ri-star-s-fill"></i></span>
                                    <span><i class="ri-star-s-fill"></i></span>
                                </div>
                                <h6 className=' text-center'>{title}</h6>
                                <div className='d-flex align-items-center justify-content-between'><span className='price'>Price: ${price}</span>
                                <span className='add'><i class="ri-shopping-basket-line"></i></span>
                                </div>
                            </div>

                        </div>
    );
};

export default ProductCard;
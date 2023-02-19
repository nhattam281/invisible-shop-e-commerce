import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { cartItemsSelector } from '../../redux/selector';
import './CartItem.scss';

function CartItem() {
    const [quantity, setQuantity] = useState(1);

    const cart = useSelector(cartItemsSelector);
    console.log(cart);

    const handleIncrease = () => {
        setQuantity((prevQty) => {
            let temQty = prevQty + 1;
            if (temQty > cart.stock) temQty = cart.stock;
            return temQty;
        });
    };

    const handleDecrease = () => {
        setQuantity((prevQty) => {
            let temQty = prevQty - 1;
            if (temQty < 1) temQty = 1;
            return temQty;
        });
    };
    return (
        <div className='cart_item'>
            <div className='cart_item-table'>
                <div className='cart_item-title'>
                    <h4>Image</h4>
                    <h4>Name</h4>
                    <h4>Price</h4>
                    <h4>Qty</h4>
                    <h4>Delete</h4>
                </div>
                {cart.length === 0 ? (
                    <div className='cart_item-null'>
                        <h3>Your cart is currently empty</h3>
                    </div>
                ) : (
                    cart &&
                    cart.map((cartItem) => (
                        <div className='cart_item-product'>
                            <div className='cart_item-image'>
                                <img
                                    src={cartItem.thumbnail}
                                    alt={cartItem.title}
                                />
                            </div>
                            <div className='cart_item-product-name'>
                                {cartItem.title}
                            </div>
                            <div className='cart_item-product-price'>
                                ${cartItem.price}
                            </div>
                            <div className='cart_item-product-quantity'>
                                <i
                                    className='fa-solid fa-minus'
                                    onClick={handleDecrease}
                                />
                                <p>{quantity}</p>
                                <i
                                    className='fa-solid fa-plus'
                                    onClick={handleIncrease}
                                />
                            </div>
                            <div className='cart_item-product-delete'>
                                <i className='fa-solid fa-trash-can'></i>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default CartItem;

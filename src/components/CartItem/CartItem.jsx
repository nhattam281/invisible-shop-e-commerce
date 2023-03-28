import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemsSelector } from '../../redux/selector';
import cartSlice from '../../redux/Slice/cartSlice';
import './CartItem.scss';

function CartItem() {
    const cart = useSelector(cartItemsSelector);
    console.log({ cart });

    const dispath = useDispatch();

    const handleIncrease = (item) => {
        dispath(cartSlice.actions.addToCart(item));
    };

    const handleDecrease = (item) => {
        dispath(cartSlice.actions.decreaseCartItemQty(item));
    };

    const handleRemoveItem = (item) => {
        dispath(cartSlice.actions.removeCartItem(item));
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
                        <div className='cart_item-product' key={cartItem.id}>
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
                                    onClick={() => handleDecrease(cartItem)}
                                />
                                <p>{cartItem.cartQuantity}</p>
                                <i
                                    className='fa-solid fa-plus'
                                    onClick={() => handleIncrease(cartItem)}
                                />
                            </div>
                            <div
                                className='cart_item-product-delete'
                                onClick={() => handleRemoveItem(cartItem)}
                            >
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

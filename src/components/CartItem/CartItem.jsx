import React from 'react';
import './CartItem.scss';

function CartItem() {
    return (
        <div className='cart_item'>
            <table className='cart_item-table'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img
                                src='https://i.dummyjson.com/data/products/1/thumbnail.jpg'
                                alt='test'
                                className='cart_item-image'
                            />
                        </td>
                        <td>iPhone 9</td>
                        <td className='cart_item-price'>$549</td>
                        <td>1</td>
                        <td className='cart_item-delete'>
                            <i className='fa-solid fa-trash-can'></i>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img
                                src='https://i.dummyjson.com/data/products/1/thumbnail.jpg'
                                alt='test'
                                className='cart_item-image'
                            />
                        </td>
                        <td>iPhone 9</td>
                        <td className='cart_item-price'>$549</td>
                        <td>1</td>
                        <td className='cart_item-delete'>
                            <i className='fa-solid fa-trash-can'></i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img
                                src='https://i.dummyjson.com/data/products/1/thumbnail.jpg'
                                alt='test'
                                className='cart_item-image'
                            />
                        </td>
                        <td>iPhone 9</td>
                        <td className='cart_item-price'>$549</td>
                        <td>1</td>
                        <td className='cart_item-delete'>
                            <i className='fa-solid fa-trash-can'></i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img
                                src='https://i.dummyjson.com/data/products/1/thumbnail.jpg'
                                alt='test'
                                className='cart_item-image'
                            />
                        </td>
                        <td>iPhone 9</td>
                        <td className='cart_item-price'>$549</td>
                        <td>1</td>
                        <td className='cart_item-delete'>
                            <i className='fa-solid fa-trash-can'></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CartItem;

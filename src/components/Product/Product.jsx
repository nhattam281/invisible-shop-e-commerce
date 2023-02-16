import React from 'react';
import { NavLink } from 'react-router-dom';
import './Product.scss';

// const test = {
//     title: 'MacBook Pro',
//     thumbnail: 'https://i.dummyjson.com/data/products/1/1.jpg',
//     category: 'smartphones',
//     price: 549,
// };

function Product({ item }) {
    return (
        <div className='product'>
            <div className='product_container'>
                <div className='product_image'>
                    <img src={item.thumbnail} alt='product' />
                </div>
                <div className='product_info'>
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                    <h4>${item.price}</h4>
                    <NavLink to='/productdetail' className='product_button'>
                        Detail
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

// const Loading = () => {
//     return (
//         <div className='product'>
//             <div className='product_container'>
//                 <div className='product_image'>
//                     <img src={item.thumbnail} alt='product' />
//                 </div>
//                 <div className='product_info'>
//                     <h3>{item.title}</h3>
//                     <p>{item.category}</p>
//                     <h4>${item.price}</h4>
//                     <NavLink to='/productdetail' className='product_button'>
//                         Detail
//                     </NavLink>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default Product;

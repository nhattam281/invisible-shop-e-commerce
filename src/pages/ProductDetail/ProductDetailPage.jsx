import React from 'react';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import './ProductDetailPage.scss';

function ProductDetailPage() {
    return (
        <div className='product_detail'>
            <div className='product_detail-banner'>
                <h2>Laptops</h2>
                <span>HP Pavilion Gaming 15</span>
            </div>

            <SingleProduct />
        </div>
    );
}

export default ProductDetailPage;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import { productSelector } from '../../redux/selector';
import { getProductByID } from '../../redux/Slice/productSlice';

import { productStatusSelector } from '../../redux/selector';
import { STATUS } from '../../utils/status';
import './ProductDetailPage.scss';

function ProductDetailPage() {
    const { productID } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductByID(productID));
    }, []);

    const product = useSelector(productSelector);
    const productStatus = useSelector(productStatusSelector);

    return (
        <div className='product_detail'>
            <div className='product_detail-banner'>
                <h2>{product.category}</h2>
                <span>{product.title}</span>
            </div>

            {productStatus === STATUS.SUCCEEDED && (
                <SingleProduct item={product} />
            )}
        </div>
    );
}

export default ProductDetailPage;

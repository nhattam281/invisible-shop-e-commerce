import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import { productSelector } from '../../redux/selector';
import { getProductByID } from '../../redux/Slice/productSlice';

import Loading from '../../components/Loading/Loading';
import ProductReview from '../../components/ProductReview/ProductReview';
import SimilarProduct from '../../components/SimilarProduct/SimilarProduct';
import { productStatusSelector } from '../../redux/selector';
import { STATUS } from '../../utils/status';
import './ProductDetailPage.scss';

function ProductDetailPage() {
    const { productID } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductByID(productID));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productID]);

    const product = useSelector(productSelector);
    const productStatus = useSelector(productStatusSelector);

    return (
        <div className='product_detail'>
            <div className='product_detail-banner'>
                <h2>{product.category}</h2>
                <span>{product.title}</span>
            </div>

            {productStatus === STATUS.SUCCEEDED ? (
                <SingleProduct item={product} />
            ) : (
                <Loading />
            )}

            {/* product review test */}
            {/* <ProductReview /> */}
            {/* product review test */}

            {product && <SimilarProduct product={product} />}
        </div>
    );
}

export default ProductDetailPage;

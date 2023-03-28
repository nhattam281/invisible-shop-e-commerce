import React, { useState } from 'react';
import './ProductReview.scss';

function ProductReview() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className='review'>
            <h1>Reviews</h1>

            <div className='review_container'>
                <div className='review_rating'>
                    {Array(5)
                        .fill(0)
                        .map((_, index) => {
                            const ratingValue = index + 1;
                            return (
                                <label key={index}>
                                    <input
                                        type='radio'
                                        name='rating'
                                        value={ratingValue}
                                        onClick={() => setRating(ratingValue)}
                                    />
                                    <i
                                        key={index}
                                        className={`fa-solid fa-star ${
                                            ratingValue <= (hover || rating)
                                                ? 'checked'
                                                : ''
                                        }`}
                                        onMouseEnter={() =>
                                            setHover(ratingValue)
                                        }
                                        onMouseLeave={() => setHover(null)}
                                    />
                                </label>
                            );
                        })}
                </div>
                <div className='review_message'>
                    <textarea
                        rows='4'
                        type='text'
                        placeholder='Reviews Message...'
                    />
                </div>
                <button className='review_button'>Submit</button>
            </div>
        </div>
    );
}

export default ProductReview;

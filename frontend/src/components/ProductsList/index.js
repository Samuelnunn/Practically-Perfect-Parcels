import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts} from '../../store/products';
import { addItemToTheCart } from '../../store/cart';
import { addReviewToThePage } from '../../store/reviews';
import './ProductList.css';

const Product = ({oneProduct}) => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id);
    const [cartId ] = useState(1);
    const [review, setReview] = useState('');

    // useEffect(() => {
    //     const singleProductId = oneProduct.id;
    //     dispatch(addReviewToThePage(singleProductId, userId, review))    
    // },[review])

    const handleClick = (e) => {
        e.preventDefault();
        const singleProductId = oneProduct.id;
        const neededPrice = oneProduct.price;
        dispatch(addItemToTheCart(cartId, singleProductId, userId, neededPrice));
    }

    const handleReviewClick = (e) => {
        e.preventDefault();
        const singleProductId = oneProduct.id;
        dispatch(addReviewToThePage(singleProductId, userId, review))
    }

    return (
        <div className="products-list">
                <p>{oneProduct.productName}</p>
                <img className='product-pics' src={`/${oneProduct.id}.jpg`} alt={oneProduct.id} />
                <p>{oneProduct.productDescription}</p>
                <p>{oneProduct.price}</p>
                <p>{review}</p>
                <div>
                    <input type='textarea' name='review' id={review.id}
                    placeholder='Write a Review'
                     value={review} onChange={e => { setReview(e.target.value) }}
                    >
                    </input>
                    {<button onClick={handleReviewClick}>Submit Review</button>}
                </div>
            <button  className='button' onClick={handleClick}>Add to cart</button> 
        </div>
    )
}


const ProductsList = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(fullReduxState => {
        return fullReduxState.products;
    });

    useEffect(() => {
        const productFetch = fetchAllProducts();
        dispatch(
            productFetch
        );
    }, [dispatch]);

    return (

            <div className='product-component'>
                {!allProducts && <h2>Finding Products!</h2>}
                {allProducts && allProducts.map(product => {
                    return (
                    <Product oneProduct={product} key={product.productName}>
                     </Product>
                    )
                })}
            </div>
    );
};
export default ProductsList;
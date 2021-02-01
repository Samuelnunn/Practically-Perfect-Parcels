import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts} from '../../store/products';
import { addItemToTheCart } from '../../store/cart';
import { addReviewToThePage, fetchAllReviews } from '../../store/reviews';
import ProductReviews from '../Reviews';
import './ProductList.css';
import FlipCard from 'fc-card-component';



const Product = ({oneProduct}) => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id);
    const [cartId ] = useState(1);

    useEffect(() => {
        const reviewFetch = fetchAllReviews();
        dispatch(
            reviewFetch
            );
    }, [dispatch]);

    // useEffect(() => {
    //     const singleProductId = oneProduct.id;
    //     dispatch(addReviewToThePage(singleProductId, userId, review))    
    // },[review])

    const handleClick = (e) => {
        e.preventDefault();
        const singleProductId = oneProduct.id;
        const neededPrice = oneProduct.price;
        dispatch(addItemToTheCart(cartId, singleProductId, userId, neededPrice));
    };



    return (
        <FlipCard
        id="font-card"
        className='flippy-card'
        height={800}
        width={600}
        rotationAxis="y"
        textFront={
            <div className="products-list" id="front-card">
                <p id='hellothere'>{oneProduct.productName}</p>
                <img className='product-pics' src={`/${oneProduct.id}.jpg`} alt={oneProduct.id} />
                <p>{oneProduct.productDescription}</p>
        </div>
        }
        textBack={
            <div className="products-list" id="back-card">
                <p>{oneProduct.price}</p>
                <ProductReviews oneProduct={oneProduct} />
                <button  className='button' onClick={handleClick}>Add to cart</button> 
            </div>
        }
        // innerPadding={20}
        fontSize={27}
        colorFront="yellow"
        textColorFront="cream"
        >
        
        </FlipCard>
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
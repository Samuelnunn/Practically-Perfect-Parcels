import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCartItems, removeItemFromTheCart } from '../../store/cart';


const SingleCartItem = ({cartId, cartItem, }) => {
    const user = useSelector(state => state.session.user);
    const cart = useSelector(state => state.cart)
    // console.log(cartItem)
    // const cartItems = Object.values(cart)
    const dispatch = useDispatch();
    const [ quantity, setQuantity ] = useState(1);
    // const neededItem = cartItems.map(item => {
    //     return item.productId }
    // )

    const handleRemoveClick = async () => {
        await dispatch(removeItemFromTheCart(cartItem.id))
        setQuantity(quantity === 0)
    }

    useEffect(()=>{
        dispatch(fetchAllCartItems(user.id))
    }, [user.id, quantity, dispatch])

    const quantityAddition = () => {
        return setQuantity(quantity + 1);
    }

    const quantitySubtraction = () => {
        if (quantity >= 2) {
        return setQuantity(quantity - 1);
        } else  {
            handleRemoveClick()
        }
    }

    return (
        <div className='container'> 
            <div className='input-field'> 
                <h5><span className="shopping-cart"></span></h5>
                    <div>   
                        <br />{ cartItem.productName }
                        <br />{ cartItem.price}
                    </div>
                    <div>
                        <button className='cart-button'  onClick={quantitySubtraction}>-</button>
                        Quantity   {quantity}
                        <button className='cart-button' onClick={quantityAddition}>+</button>
                    </div>
                    <div>
                        <button className='cart-button' onClick={handleRemoveClick}> Remove Item </button>
                    </div>                     
            </div>
        </div>
    )
}


const CartItemsList = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    useEffect(() => {
        dispatch(
            fetchAllCartItems(user.id)
            );
    }, [dispatch, user.id]);


    //useEffect, transform cart from redux, add all cart items as dependency if items
    // already exists product.id
    const allCartItems = useSelector(fullReduxState => {
        return Object.values(fullReduxState.cart);
    });

    return (
        <div>
            {allCartItems && allCartItems.map((cartObject) => {
                return (
                    <SingleCartItem 
                        cartItem={cartObject.Product} key={cartObject.id}
                        cartId={cartObject.id}
                    ></SingleCartItem>     
                )
            })}
        </div>
    )
   
};

export default CartItemsList;

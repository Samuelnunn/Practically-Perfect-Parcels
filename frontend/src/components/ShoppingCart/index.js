import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCartItems, buyItems, removeItemFromTheCart } from '../../store/cart';


const SingleCartItem = ({cartId, cartItem, }) => {
    const user = useSelector(state => state.session.user);
    const itemINeed = useSelector(state => state.cartItems)
    const dispatch = useDispatch();
    const [ quantity, setQuantity ] = useState(1);
    
    console.log(user.id)

    const handleRemoveClick = async () => {
        await dispatch(removeItemFromTheCart(cartId))
        setQuantity(quantity === 0)
    }
    useEffect(()=>{
        dispatch(fetchAllCartItems(user.id))
    }, [quantity])



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
    useEffect(async () => {
        await dispatch(
            fetchAllCartItems(user.id)
            );
    }, []);

    const myCartItems = useSelector(fullReduxState => {
        return Object.values(fullReduxState)
    })

    //useEffect, transform cart from redux, add all cart items as dependency if items
    // already exists product.id
    const allCartItems = useSelector(fullReduxState => {
        return Object.values(fullReduxState.cart);
    });

    console.log(myCartItems[2])
    return (
        <div>
            {allCartItems && allCartItems.map((cartObject) => {
                // console.log(cartObject)
                return (
                    <SingleCartItem 
                        cartItem={cartObject.Product} key={cartObject.id}
                        cartId={cartObject.id} key={cartObject.id}
                    ></SingleCartItem>     
                )
            })}
        </div>
    )
   
};

export default CartItemsList;

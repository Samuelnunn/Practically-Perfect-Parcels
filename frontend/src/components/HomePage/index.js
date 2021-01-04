
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProductsList from '../ProductsList'






const Home = () => {
    
    const sessionUser = useSelector(state => {
        return state.session.user;  
    })
    console.log(sessionUser)

    return (
        <div>
            <div>
                <div id="home-page-container">
                    <NavLink to='/shoppingcarts'> Shopping Cart</NavLink>
                </div>
            </div>
            { sessionUser && <h3>Welcome {sessionUser.username}, we hope you are having a practically perfect day!</h3>}
                <ProductsList />

            <div className='shoppingcart'> 
                <button className='cart-button'>I am a cart</button>
                <div className='shopping-cart'>
                </div>
            </div>
        </div>
    )
    
}
export default Home;
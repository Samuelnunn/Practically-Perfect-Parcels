import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProductsList from '../ProductsList'
import './Homepage.css'

const Home = () => {
    const sessionUser = useSelector(state => {
        return state.session.user;  
    })

    return (
        <div>
            <div>
                <div id="home-page-container">
                    <NavLink to='/shoppingcarts' className='shopping-cart-text'> Shopping Cart</NavLink>
                </div>
            </div>
            { sessionUser && <h3 className='welcome-text'>Welcome {sessionUser.username}, we hope you are having a practically perfect day!</h3>}
                <div className='whole-page'>
                    <ProductsList />
                </div>
        </div>
    )  
}

export default Home;
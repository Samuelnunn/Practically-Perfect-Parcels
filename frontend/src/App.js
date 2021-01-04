import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/signUp'
import Home from './components/HomePage'
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation';
import ProductsList from './components/ProductsList';
import CartItemsList from './components/ShoppingCart'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products">
            <ProductsList />
          </Route>
          <Route path="/shoppingcarts">
            <CartItemsList />
          </Route>
        </Switch>
      )}
    </>
  );
}

// ignore me

export default App;
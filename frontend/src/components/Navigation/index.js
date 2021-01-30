import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className="main-div">
        <div id="castle">
          {/* <img className='product-pics' src={`/castle.png`} /> */}
            <div className='nav-buttons' id='signup-login'>
              <NavLink id='login-button' className="navigationButtons" to="/login">Log In</NavLink>
              <NavLink id='signup-button' className="navigationButtons" to="/signup">Sign Up</NavLink>
            </div>
        </div>
        <div className="logo-div">
          <img id='logo-pic' src={`/logo.png`} />
        </div>
        </div>
    );
  }

  return (
    <ul className='top-navigation-bar'>
      <li>
        <NavLink className="navigationButtons" to="/home" >
        <img src="https://d1fdloi71mui9q.cloudfront.net/tvlc0BuRtq419gf3E6w7_5WATz9hU3H8m5Q8g"
         alt="Profile" data-testid="ProfileImage"  className='homeButton' >
        </img>
        </NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
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
      <>
        <NavLink className="navigationButtons" to="/login">Log In</NavLink>
        <NavLink className="navigationButtons" to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul id='top-navigation-bar'>
      <li>
        <NavLink className="navigationButtons" to="/home" >
        <img src="https://d1fdloi71mui9q.cloudfront.net/tvlc0BuRtq419gf3E6w7_5WATz9hU3H8m5Q8g"
         alt="Profile" data-testid="ProfileImage" display="flex" height='100px' width='100px' border-radius="50%" className='homeButton' >
        </img>
        </NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
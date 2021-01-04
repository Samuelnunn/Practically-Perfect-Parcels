import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignupForm.css';

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])

    if (sessionUser) return <Redirect to="/home" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signUp({ firstName, lastName, username, email, password}))
                .catch( res => {
                    if ( res.data && res.data.errors) setErrors(res.data.errors);
                });
        }
        return setErrors(['Password must match Password confirmation field.'])
    };

    return (
        <div>
            <h1 class='title-of-page'>Practically Perfect Parcels</h1>
        <div className={'container'}>
        <form onSubmit={handleSubmit}>
            <ul className={'input-field'}>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <h2 className={'login-text'}>Sign Up</h2>
            <label className={'input-field'}>
                First Name:
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </label>
            <label className={'input-field'}>
                LastName: 
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </label>
            <label className={'input-field pad-me'}>
                Username
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </label>
            <label className={'input-field pad-me'}>
                Email
                <input
                     type="text"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                />
            </label>
            <label className={'input-field pad-me'}>
                Password
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <label className={'input-field pad-me'}>
                Confirm Password
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </label>
            <div className={'col-md-3 col-sm-3 cox-xs-6'}>
                <button type="submit" className={'button btn-sm animated-button'}>Sign Up</button>
            </div>
        </form>
        </div>
        </div>
      );
    }
    
export default SignupFormPage;


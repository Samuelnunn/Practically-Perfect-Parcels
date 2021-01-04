import  { useState } from 'react';
import './LoginForm.css'
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to='/home' />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch((res) => {
                if (res.data && res.data.errors) setErrors(res.data.errors);
            });
    }

    return (
        <div className={'login-container'}>
        <form onSubmit={handleSubmit} className={'form'}>
            <ul className={'input-field'}>
                {errors.map((error, i) => <li key={i}>{error}</li>)}    
            </ul>
            <h2 className={'login-text'}>Login</h2>
            <label className={'input-field'}>
                Username or Email
                <input 
                type='text'
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                />
            </label>
            <label className={'input-field pad-me'}>
                Password
                <input 
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
            <div className={'col-md-3 col-sm-3 cox-xs-6'}>
            <button type="submit" className={'button btn-sm animated-button'}>Log In</button>
            </div>
        </form>
        </div>
    );
}

export default LoginFormPage;

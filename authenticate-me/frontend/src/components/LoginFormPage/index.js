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
        <Redirect to='/' />
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
        <div className={'container'}>
        <form onSubmit={handleSubmit} className={'form'}>
            <ul>
                {errors.map((error, i) => <li key={i}>{error}</li>)}    
            </ul>
            <h2>Login</h2>
            <label className={'input-field'}>
                Username or Email
                <input 
                type='text'
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                />
            </label>
            <label className={'input-field'}>
                Password
                <input 
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
            <button type="submit" className={'button'}>Log In</button>
        </form>
        </div>
    );
}

export default LoginFormPage;

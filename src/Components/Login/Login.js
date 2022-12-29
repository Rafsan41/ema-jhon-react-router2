import React from 'react';
import { Link, useLocation,useHistory } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop'
    // console.log('came from' ,location.state?.from);

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
            history.push(redirect_uri)
               console.log(result.user);
        })
}

    return (
        <div className='login-from'>
            <div>
                <h2>Login</h2>
                <form >
                    <input type='email' name='' id='' />  <br /><br />
                    <input type='password' name='' id='' />  <br /><br />
                    <input type='submit' value='submit'/>
                </form>
                <p>New to ema-jhon? <Link to='/register'>Creat Account</Link></p>
                <div>
                ---------------or-----------------
                </div>
                <button
                    onClick={handleGoogleSignIn}
                    className='btn-regular'
                >Google sign in</button>
            </div>
        </div>
    );
};

export default Login;
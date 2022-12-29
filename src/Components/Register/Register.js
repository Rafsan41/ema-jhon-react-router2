import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register : creat account</h2>
                <form onSubmit="">
                    <input type="email" name=""
                        id=""
                        placeholder="Your Email" /><br /><br />
                    <input type="password" name="" id=""
                        placeholder="enter your password" /><br /><br />
                    <input type="password" name="" id="" placeholder="re-enter your password" />
                    <br /><br />
                    <input type="submit" value="submit" /><br />
                    <p>Alreay have an account?<Link to="/login">Login</Link></p>
                </form>
                 <div>---------------or-----------------</div>
            <button className='btn-regular'>Google sign in</button>
            
            </div>
        </div>
    );
};

export default Register;
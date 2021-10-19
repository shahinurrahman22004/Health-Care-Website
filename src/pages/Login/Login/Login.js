import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div style={{marginBottom: '50px', textAlign:'center',}}>
            <h2 className="text-primary" style={{marginTop: '50px'}}>Login</h2>
            <form >
                <input className="w-50 px-3 py-2" type="text" name="" id="" placeholder="Your Name" required />
                <br />
                <input className="mt-2 w-50 px-3 py-2" type="email" placeholder="Your Email" name="" id="" required />
                <br />
                <button type="submit" className="btn btn-primary mt-3 mb-5">Submit</button>
            </form>


            <h2 className="text-primary">Login Please Using Google</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Login</button>
        </div>
    );
};

export default Login;
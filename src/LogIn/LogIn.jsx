import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './LogIn.css'; // Import your custom CSS here

const LogIn = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin@vidyagxp.com' && password === 'Amit@121') {
            toast.success('LogIn Successfully.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate('/dashboard');
        } else {
            toast.error('Invalid username or password. Please try again.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <>
            <div className='login-container flex justify-center items-center min-h-screen bg-gradient-to-br from-[#4494CC] to-[#133860]'>
                <div className='login-box h-[90%] shadow-2xl shadow-black'>
                    <div className='left-side'>
                        <img src="/capsule.jpeg" alt="Login Illustration" className="login-image"/>
                    </div>
                    <div className='right-side gap-8'>
                       <div className=' flex justify-center'> <img src='/login.png' className='w-[400px] flex justify-center' /></div>
                        <h2 className='text-3xl flex justify-center items-center text-orange-400'>Welcome to Asset Management System</h2>
                       
                        <div className="input-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {/* <a href="#" className="forgot-password">Forgot Password?</a> */}
                        <button className="sign-in-btn" onClick={handleLogin}>Log In</button>
                       
                       
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default LogIn;

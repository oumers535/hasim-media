import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

   
    try{
      
       if (email === 'test@usb.com' && password === 'password123') {
        alert('Login successful!');
       } else {
        setError('Invalid credentials.');
       }
    } catch (error){
        setError('Login Failed!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-hero-img bg-cover bg-center relative">
      <div className="shadow-lg border  bg-gray-100 rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline border-gray-400 "
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4">
             <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-36"
              type="submit"
            >
              Sign In
            </button>
           <div className='flex gap-2 items-center'>
              <p className='text-gray-500 text-sm '>Don't have an account? </p>
            <Link to={'/signup'}><h1 className='text-blue-500 '>Signup</h1></Link>
           </div>
          
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
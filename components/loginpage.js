import React from 'react';
// import GoogleIcon from '../components/GoogleIcon';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-linkedin">
      <div className="flex flex-col justify-center items-center w-80 h-96 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-8">Welcome back!</h1>
        <button className="flex justify-center items-center w-60 h-12 bg-white border-2 border-linkedin rounded-full text-linkedin font-bold text-lg focus:outline-none hover:bg-linkedin hover:text-white transition-colors duration-300">
         
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

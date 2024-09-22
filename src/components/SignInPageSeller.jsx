import React, { useState } from "react";
import axios from 'axios';

const AuthPage = () => {
  const [companyName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

const handleNameChange = (e) => {
  setName(e.target.value);
};

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    const userData = {
      email,
      password,
      companyName
    };
  
    try {
      const response = await axios.post('http://api.bigbolts.ru/sign_up/buyer', userData);
      console.log('Response:', response.data);
      toastr.success('Sign up successful!');
      // Handle successful sign up (e.g., redirect, update state, etc.)
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      toastr.error('Sign up failed. Please try again.');
      // Handle error (e.g., show error message to user)
    }
  };
  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">
          {isSignUp ? "Регистрация" : "Войти"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2">
              Имя
            </label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={handleNameChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2">
              Пароль
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#ff8800] text-white px-4 py-2 rounded-md transition-all hover:bg-[#ff5500]"
          >
            {isSignUp ? "Зарегистрироваться" : "Войти"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600">
            {isSignUp ? "Уже есть аккаунт?" : "Нет аккаунта?"}
          </span>
          <button
            onClick={toggleSignUp}
            className="text-[#ff8800] hover:text-[#ff5500]"
          >
            {isSignUp ? "Войти" : "Зарегистрироваться"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default AuthPage;

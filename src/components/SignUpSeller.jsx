import React, { useState } from "react";
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const AuthPage = () => {
  
  const [shop_name, setStoreName] = useState("");
  const [name, setName] = useState("");
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

  const handleStoreNameChange = (e) => {
    setStoreName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page on submit
    
    const userData = {
      email,
      password,
      name,
      shop_name
    };
  
    try {
      const response = await axios.post('http://api.bigbolts.ru/sign_up/seller', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        // Handle successful response
        toastr.success('User data sent successfully');
        console.log('User data sent successfully');
        // You might want to redirect the user or update the UI here
      } else {
        // Handle error response
        toastr.error('Failed to send user data');
        console.error('Failed to send user data');
      }
    } catch (error) {
      // Handle network or server error
      toastr.error('Error: ' + error.message);
      console.error('Error:', error);
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
              Название магазина
            </label>
            <input
              type="text"
              id="storeName"
              value={shop_name}
              onChange={handleStoreNameChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2">
              Имя
            </label>
            <input
              type="text"
              id="name"
              value={name}
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

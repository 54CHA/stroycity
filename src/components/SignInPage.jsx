import React, { useState } from "react";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in/sign-up logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Sign Up:", isSignUp);
    // Reset form fields after submission
    setEmail("");
    setPassword("");
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

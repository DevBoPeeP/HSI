import React, { useState } from "react";
import news from "../assets/news.svg";

const News = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simulating successful submission
    setMessage("Thank you for subscribing!");
    setEmail(""); // Clear input field
  };

  return (
    <div className="mt-3 px-4 sm:px-8 md:px-16 lg:px-24 w-full h-[50rem] flex flex-col lg:flex-row items-center justify-center">
      <div className=" p-10 w-[50%] h-[100%] justify-center flex">
        <img
          src={news}
          alt="News"
          className="w-full max-w-sm h-auto object-contain "
        />
      </div>

      <div className="box-border border-amber-900 border-4 h-auto w-full lg:w-[40rem] rounded-[8%] shadow-lg p-6 sm:p-8 md:p-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
          Subscribe to our Newsletter
        </h2>
        <div className="max-w-full mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-[8%] text-center h-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="w-full bg-amber-800 text-white py-3 rounded-full hover:bg-amber-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
          {message && <p className="mt-4 text-green-600">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default News;

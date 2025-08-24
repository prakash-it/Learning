// App.jsx
import React, { useState } from "react";
import Confetti from "react-confetti";
import "./index.css"; // Import for custom animations

export default function App() {
  const [showWish, setShowWish] = useState(false);

  return (
    <>
    <div className="h-screen flex flex-col justify-center items-center animated-bg">
      {showWish && <Confetti />}
      
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg animate-bounce">
        🎂 Happy Birthday 🎉
      </h1>

      {!showWish ? (
        <button
          onClick={() => setShowWish(true)}
          className="mt-10 px-8 py-4 bg-white text-pink-500 font-bold rounded-full shadow-lg 
                     hover:scale-110 transition-transform glowing-btn"
        >
          Open Your Surprise 🎁
        </button>
      ) : (
        <p className="mt-10 text-2xl md:text-4xl text-white font-semibold text-center animate-pulse">
          Wishing you all the happiness in the world! 💖<br />
          You’re truly amazing!
        </p>
      )}
    </div>
    </>
  );
}

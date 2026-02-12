import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [quote, setQuote] = useState("");
  const [showYes, setShowYes] = useState(false);
  const [noMsg, setNoMsg] = useState(false);
  const [shake, setShake] = useState(false);

  const moveNo = () => {
    setPos({
      x: Math.random() * 200 - 100,
      y: Math.random() * 120 - 60,
    });
    setShake(true);
    setTimeout(() => setShake(false), 300);
  };

  const quotes = [
    "You are my favorite hello and hardest goodbye ❤️",
    "With you, every day feels like Valentine’s Day 💖",
    "I don’t need the world, I just need you 🌍❤️",
  ];

  /* 🌸 PAGE 1 */
  if (page === 1) {
    return (
      <div className="intro">
        <h1 className="fade">Hey Valentine 💌</h1>
        <p className="fade-delay">This is something special for you</p>
        <button className="main-btn" onClick={() => setPage(2)}>
          If want to know click me 💕
        </button>
      </div>
    );
  }

  /* 💘 PAGE 2 */
  if (page === 2) {
    return (
      <div className={`app ${shake ? "shake" : ""}`}>
        <h1>
          <span>Love</span> Me Valentine
        </h1>

        <div className="card">
          <img
            src={`${process.env.PUBLIC_URL}/cat.png`}
            alt="cat"
            className="card-img"
          />

          {!showYes ? (
            <>
              <h2>Do you love me? 💖</h2>

              <div className="btns">
                <button className="yes" onClick={() => setShowYes(true)}>
                  Yes
                </button>

                <button
                  className="no"
                  style={{
                    transform: `translate(${pos.x}px, ${pos.y}px)`,
                  }}
                  onMouseEnter={() => {
                    moveNo();
                    setNoMsg(true);
                  }}
                  onMouseLeave={() => setNoMsg(false)}
                >
                  No
                </button>
              </div>

              {noMsg && <p className="no-msg">Please no 🥺</p>}
            </>
          ) : (
            <>
              <h2 className="yes-text">
                Yes dear, I knew you would choose YES 💕
              </h2>

              <p className="quote">My heart always chooses you 💖</p>
              <p className="quote">Every love story feels perfect with you 🌸</p>

              <button
                className="main-btn"
                onClick={() => {
                  setShowYes(false);
                  setNoMsg(false);
                  setPage(3);
                }}
              >
                Next 💕
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  /* 😍 PAGE 3 */
  if (page === 3) {
    return (
      <div className="result-page">
        <img
          src={`${process.env.PUBLIC_URL}/img1.jpg`}
          alt="cute"
          className="small-img"
        />

        <h1>Once again I knew it 😍</h1>

        <button className="main-btn" onClick={() => setPage(4)}>
          Open gifts 🎁
        </button>
      </div>
    );
  }

  /* 🎁 PAGE 4 */
  return (
    <div className="gift-page">
      <img
        src={`${process.env.PUBLIC_URL}/img2.webp`}
        alt="cute"
        className="small-img"
      />

      <h1>For My Love 🎁</h1>

      <div className="gifts">
        {quotes.map((q, i) => (
          <div key={i} className="gift" onClick={() => setQuote(q)}>
            🎁
          </div>
        ))}
      </div>

      {quote && <p className="quote">{quote}</p>}
    </div>
  );
}

export default App;

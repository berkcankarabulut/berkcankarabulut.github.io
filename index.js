function App() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Berkcan Karabulut</h1>
        <p className="text-gray-400">Senior Unity Developer | Game Programmer</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300">
          5+ yıllık oyun geliştirme tecrübem var. Unity ile 50’den fazla oyun geliştirdim ve
          2 LiveOps projesinde çalıştım. Mobil sektörde özellikle puzzle ve casual oyunlara
          odaklanıyorum.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="grid gap-4">
          <li className="p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold">🎰 Wheel of Fortune</h3>
            <p className="text-gray-400">Unity gambling game with zone progression & rewards.</p>
            <a href="https://github.com/berkcankarabulut/wheel-of-fortune" className="text-blue-400 hover:underline">View on GitHub</a>
          </li>

          <li className="p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold">🧩 Match-3 Puzzle Game</h3>
            <p className="text-gray-400">Candy Crush tarzı puzzle oyunu.</p>
            <a href="https://github.com/berkcankarabulut/match3" className="text-blue-400 hover:underline">View on GitHub</a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <a
          href="cv.pdf"
          download
          className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow"
        >
          📄 Download CV
        </a>
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

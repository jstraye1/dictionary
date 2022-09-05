import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <p>
            <a
              href="https://github.com/jstraye1/dictionary"
              target="_blank"
              rel="noreferrer"
            >
              Open-Source Code
            </a>{" "}
            by Jen Strayer
          </p>
        </footer>
      </div>
    </div>
  );
}

import "./App.css";
import GameController from "./components/GameController";

export default function App() {
  return (
    <div className="App">
      <h1>
        2048 the game
      </h1>
      <GameController/>
      <p>
        P.S. Use keyboard arrows for control
      </p>
    </div>
  );
}

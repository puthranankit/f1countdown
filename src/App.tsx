import "./App.css";
import Countdown from "./components/Countdown";
import Navigation from "./components/Navigation";
import Upcoming from "./components/Upcoming";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Countdown />
      <Upcoming />
    </div>
  );
}

export default App;

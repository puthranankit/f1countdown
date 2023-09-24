import { useEffect, useState } from "react";
import "./App.css";
import Countdown from "./components/Countdown";
import RaceUpdate from "./components/RaceUpdate";
import Upcoming from "./components/Upcoming";
import { getAllEvents } from "./data/data";
import { Race } from "./types/race";

function App() {
  const [races, setRaces] = useState<Race[]>([]);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const races = await getAllEvents("f1");

      setRaces(races);
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  return (
    <div className="container">
      <h1 className="title">F1 Countdown</h1>
      <RaceUpdate />
      <Countdown races={races} />
      <Upcoming races={races} />
    </div>
  );
}

export default App;

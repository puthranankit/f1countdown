import React, { useEffect, useState } from "react";
import Countdown from "../Countdown";
import { Footer } from "../Footer/Footer";
import Upcoming from "../Upcoming";
import { getAllEvents } from "../../data/data";
import { Race } from "../../types/race";
import RaceCarousel from "../RaceCarousel";
import { Header } from "../Header/Header";
import { useRaceContext } from "../../contexts/RaceContext";

const LandingPage: React.FC = () => {
  const [races, setRaces] = useState<Race[]>([]);

  const { race } = useRaceContext();

  useEffect(() => {
    async function fetchData() {
      const races = await getAllEvents("f1");

      setRaces(races);
    }
    fetchData();
  }, []);

  const handleRaceSelect = (race: Race) => {
    console.log(race);
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />

      <div className="flex-grow">
        {races && (
          <RaceCarousel races={races} onRaceSelect={handleRaceSelect} />
        )}
        <Countdown race={race} />
        <Upcoming races={races} />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;

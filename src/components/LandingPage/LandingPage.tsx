import React, { useEffect, useState } from "react";
import Countdown from "../Countdown";
import { Footer } from "../Footer/Footer";
import Upcoming from "../Upcoming";
import { getAllEvents } from "../../data/data";
import { Race } from "../../types/race";
import RaceCarousel from "../RaceCarousel";

const LandingPage: React.FC = () => {
  const [races, setRaces] = useState<Race[]>([]);
  const [selectedRace, setSelectedRace] = useState<Race | undefined>();

  useEffect(() => {
    async function fetchData() {
      const races = await getAllEvents("f1");

      setRaces(races);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-7xl">F1 Countdown</h1>
      {races && (
        <RaceCarousel
          races={races}
          onRaceSelect={(race) => setSelectedRace(race)}
        />
      )}
      <Countdown race={selectedRace} />
      <Upcoming races={races} />
      <Footer />
    </div>
  );
};

export default LandingPage;

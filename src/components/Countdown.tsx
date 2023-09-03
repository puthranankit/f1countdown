import React, { useEffect, useState } from "react";
import { getAllEvents } from "../data/data";
import { Race } from "../types/race";

const Countdown = () => {
  const [races, setRaces] = useState<Race[]>();
  const [selectedRace, setSelectedRace] = useState<Race>();

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const races = await getAllEvents("f1");
      console.log(races);
      setRaces(races);
      console.log(races);
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  const handleRaceSelect = (race: string) => {
    const selectRace = races?.filter((i) => i.name === race)[0];
    if (selectRace) {
      setSelectedRace(selectRace);
    }
  };

  return (
    <div>
      <select
        onChange={(e) => handleRaceSelect(e.target.value)}
        name="raceNames"
        id="raceNames"
      >
        {races?.map((race) => (
          <option key={race.localeKey} value={race.name}>
            {race.name}
          </option>
        ))}
      </select>
      {selectedRace && (
        <div>
          <div>GP : {selectedRace.name}</div>
          <div>Race Date : {selectedRace.sessions.gp}</div>
        </div>
      )}
    </div>
  );
};

export default Countdown;

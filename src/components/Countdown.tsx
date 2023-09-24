import { useState, useEffect } from "react";
import { Race } from "../types/race";
import "./Countdown.css";

interface Props {
  races: Race[];
}

const Countdown = ({ races }: Props) => {
  const [selectedRace, setSelectedRace] = useState<Race>();
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number } | null>(
    null
  );

  useEffect(() => {
    if (selectedRace) {
      const timerId = setInterval(() => {
        const endTime = selectedRace.sessions.gp;
        const difference = new Date(endTime).getTime() - new Date().getTime();
        if (difference > 0) {
          setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          });
        } else {
          setTimeLeft(null);
          clearInterval(timerId);
        }
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [selectedRace]);

  const handleRaceSelect = (raceName: string) => {
    const selectRace = races.find((race) => race.name === raceName);
    setSelectedRace(selectRace);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <select
        onChange={(e) => handleRaceSelect(e.target.value)}
        name="raceNames"
        id="raceNames"
      >
        {races.map((race) => (
          <option key={race.localeKey} value={race.name}>
            {race.name}
          </option>
        ))}
      </select>
      <nav>
        <ul className="session-nav">
          <li>
            <a>FP1</a>
          </li>
          <li>
            <a>FP2</a>
          </li>
          <li>
            <a>FP3</a>
          </li>
          <li>
            <a>QUALI</a>
          </li>
          <li>
            <a>RACE</a>
          </li>
        </ul>
      </nav>
      {selectedRace && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>GP : {selectedRace.name}</div>
          {timeLeft ? (
            <div>
              <div></div>
              <div>
                Time Left: {timeLeft.days} days {timeLeft.hours} hours{" "}
                {timeLeft.minutes} minutes {timeLeft.seconds} seconds
              </div>
            </div>
          ) : (
            <div>Race has ended</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Countdown;

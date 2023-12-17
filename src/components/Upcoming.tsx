import { Race } from "../types/race";
import "./Upcoming.css";

interface Props {
  races: Race[];
}
const Upcoming = ({ races }: Props) => {
  const currentDate = new Date();

  const nextRaces = races.filter((race) => {
    const raceDate = new Date(race.sessions.gp);
    return raceDate.getTime() > currentDate.getTime();
  });

  return (
    <div className="upcoming">
      <ul>
        {nextRaces.slice(1, 4).map((race) => (
          <li key={race.round}>{race.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Upcoming;

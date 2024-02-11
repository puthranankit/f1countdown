import { useState, useEffect } from "react";
import { Race } from "../types/race";
import "./Countdown.css";
import Timer from "./Timer/Timer";

interface Props {
  race: Race | undefined;
}

const Countdown = ({ race }: Props) => {
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number } | null>(
    null
  );

  useEffect(() => {
    if (race) {
      const timerId = setInterval(() => {
        const endTime = race.sessions.gp;
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
  }, [race?.name]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
        {race && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {timeLeft ? (
              <div>
                <div></div>
                <div>
                  <Timer
                    days={timeLeft.days}
                    hours={timeLeft.hours}
                    minutes={timeLeft.minutes}
                    seconds={timeLeft.seconds}
                  />
                </div>
              </div>
            ) : (
              <div>
                <Timer days={0} hours={0} minutes={0} seconds={0} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Countdown;

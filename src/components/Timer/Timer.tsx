import React from "react";

interface TimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer: React.FC<TimerProps> = ({ days, hours, minutes, seconds }) => {
  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const renderTimeBlock = (time: number, label: string) => {
    return (
      <div className="flex flex-col items-center">
        <div className="p-4 text-9xl">{formatTime(time)}</div>
        <div>{label}</div>
      </div>
    );
  };

  return (
    <div className="flex justify-between">
      {renderTimeBlock(days, "Days")}
      {renderTimeBlock(hours, "Hours")}
      {renderTimeBlock(minutes, "Minutes")}
      {renderTimeBlock(seconds, "Seconds")}
    </div>
  );
};

export default Timer;

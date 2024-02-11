import { useEffect, useState } from "react";
import { Race } from "../types/race";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useRaceContext } from "../contexts/RaceContext";

type RaceCarouselProps = {
  races: Race[];
  onRaceSelect: (race: Race) => void;
};

const RaceCarousel = ({ races, onRaceSelect }: RaceCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setRace } = useRaceContext();

  const handleForwardClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % races.length);
  };

  const handleBackwardClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + races.length) % races.length
    );
  };

  useEffect(() => {
    const nextRace: Race | undefined = races.find(
      (race) => race.sessions.gp > new Date()
    );

    if (nextRace) setRace(nextRace);
  }, []);

  useEffect(() => {
    onRaceSelect(races[currentIndex]);
    setRace(races[currentIndex]);
    // setSelectedRace(races[currentIndex]);
  }, [currentIndex]);

  return (
    <div className="flex justify-between m-8">
      <button onClick={handleBackwardClick}>
        <BsArrowLeftCircleFill size={40} />
      </button>
      <h1 className="text-4xl font-bold w-80 text-center">
        {races[currentIndex]?.name}
      </h1>
      <button onClick={handleForwardClick}>
        <BsArrowRightCircleFill size={40} />
      </button>
    </div>
  );
};

export default RaceCarousel;

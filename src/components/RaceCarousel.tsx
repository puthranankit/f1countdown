import { useEffect, useState } from "react";
import { Race } from "../types/race";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

type RaceCarouselProps = {
  races: Race[];
  onRaceSelect: (race: Race) => void;
};

const RaceCarousel = ({ races, onRaceSelect }: RaceCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(races);

  const handleForwardClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % races.length);
  };

  const handleBackwardClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + races.length) % races.length
    );
  };

  useEffect(() => {
    onRaceSelect(races[currentIndex]);
  }, [currentIndex]);

  return (
    <div className="flex justify-between w-full p-6">
      <button onClick={handleBackwardClick}>
        <BsArrowLeftCircleFill size={40} />
      </button>
      <h1 className="text-4xl font-bold">{races[currentIndex]?.name}</h1>
      <button onClick={handleForwardClick}>
        <BsArrowRightCircleFill size={40} />
      </button>
    </div>
  );
};

export default RaceCarousel;

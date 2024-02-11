import React, { createContext, useContext, useState } from "react";
import { Race } from "../types/race";

// Assuming you have these interfaces defined elsewhere and are importing them

// Step 2: Define the type for your context
interface RaceContextType {
  race: Race;
  setRace: React.Dispatch<React.SetStateAction<Race>>;
}

// Step 3: Create the context with a default value
const RaceContext = createContext<RaceContextType | undefined>(undefined);

// Step 4: Create a Provider Component
const RaceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [race, setRace] = useState<Race>({
    name: "",
    location: "",
    latitude: 0,
    longitude: 0,
    round: 0,
    slug: "",
    localeKey: "",
    sessions: {
      fp1: new Date(),
      qualifying: new Date(),
      gp: new Date(),
    },
  });

  return (
    <RaceContext.Provider value={{ race, setRace }}>
      {children}
    </RaceContext.Provider>
  );
};

// Step 5: Create a custom hook for the context
const useRaceContext = () => {
  const context = useContext(RaceContext);
  if (!context) {
    throw new Error("useRaceContext must be used within a RaceProvider");
  }
  return context;
};

export { RaceProvider, useRaceContext };

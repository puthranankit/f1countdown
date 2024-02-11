import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import { RaceProvider } from "./contexts/RaceContext";

function App() {
  return (
    <RaceProvider>
      <div
        className="bg-black 
    text-white
     w-full 
     h-screen 
     flex 
     flex-col 
     items-center"
      >
        <LandingPage></LandingPage>
      </div>
    </RaceProvider>
  );
}

export default App;

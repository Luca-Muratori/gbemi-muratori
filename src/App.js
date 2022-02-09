import "./App.css";
import BadgeComponent from "./components/BadgeComponent";
import WarningSignComponent from "./components/WarningSignComponent";

function App() {
  return (
    <div className="App">
      <WarningSignComponent />,
      <BadgeComponent />
    </div>
  );
}

export default App;

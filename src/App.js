import "./App.css";
import BadgeComponent from "./components/BadgeComponent";
import WarningSignComponent from "./components/WarningSignComponent";
import SingleBookComponent from "./components/SingleBookComponent";

function App() {
  return (
    <div className="App">
      <WarningSignComponent />,
      <BadgeComponent />
      <SingleBookComponent />
    </div>
  );
}

export default App;

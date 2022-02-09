import "./App.css";
import BadgeComponent from "./components/BadgeComponent";
import BookListComponent from "./components/BookListComponent";
import WarningSignComponent from "./components/WarningSignComponent";

function App() {
  return (
    <div className="App">
      <WarningSignComponent />,
      <BadgeComponent />
      <BookListComponent />
    </div>
  );
}

export default App;

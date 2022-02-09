import "./App.css";
import BadgeComponent from "./components/BadgeComponent";
// import BookListComponent from "./components/BookListComponent";
import WarningSignComponent from "./components/WarningSignComponent";
import FilterBookList from './components/FilterBookList'

function App() {
  return (
    <div className="App">
      <WarningSignComponent />,
      <BadgeComponent />,
      {/* <BookListComponent />, */}
      <FilterBookList />,
    </div>
  );
}

export default App;

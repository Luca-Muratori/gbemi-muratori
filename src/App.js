import './App.css';
import WarningSignComponent from './components/WarningSignComponent'

function App() {
  return (
    <div className="App">
      <WarningSignComponent branding='Alert' colorAlert='red'/>
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './Components/NavBar'
import Home from './Components/Home';
import GeneralPage from './Components/GeneralPage';

function App() {
  return (
      <div className="App">
        <NavBar />
        <Home />
        <GeneralPage />
    </div>
  );
}

export default App;

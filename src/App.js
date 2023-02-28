import './App.css';

import Home from './Components/Home';
import GeneralContainer from './Containers/GeneralContainer';
import BasicContainer from './Containers/BasicContainer';

function App() {
  return (
      <div className="App">
      
        <Home />
        <GeneralContainer />
        <BasicContainer />
    </div>
  );
}

export default App;

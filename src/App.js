import './App.css';

import Home from './Components/Home';
import GeneralContainer from './Containers/GeneralContainer';
import BasicContainer from './Containers/BasicContainer';
import TecnologyContainer from './Containers/TecnologyContainer';

function App() {
  return (
      <div className="App">
      
        <Home />
        <GeneralContainer />
        <BasicContainer />
        <TecnologyContainer />
    </div>
  );
}

export default App;

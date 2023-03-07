import './App.css';

import Home from './Components/Home';
import GeneralContainer from './Containers/GeneralContainer';
import BasicContainer from './Containers/BasicContainer';
import EducationContainer from './Containers/EducationContainer';
import TecnologyContainer from './Containers/TecnologyContainer';

function App() {
  return (
      <div className="App">
      
        <Home />
        <GeneralContainer />
        <BasicContainer />
        <EducationContainer />
        <TecnologyContainer />
    </div>
  );
}

export default App;

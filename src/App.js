import './App.css';

import Home from './Components/Home';
import GeneralContainer from './Containers/GeneralContainer';
import BasicContainer from './Containers/BasicContainer';
import EducationContainer from './Containers/EducationContainer';
import TecnologyContainer from './Containers/TecnologyContainer';
import DemographyContainer from './Containers/DemographyContainer';

function App() {
  return (
      <div className="App">
      
        <Home />
        <GeneralContainer />
        <BasicContainer />
        <EducationContainer />
        <TecnologyContainer />
        <DemographyContainer />
    </div>
  );
}

export default App;

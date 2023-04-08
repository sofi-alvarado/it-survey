import Home from './Components/Home';
import GeneralContainer from './Containers/GeneralContainer';
import BasicContainer from './Containers/BasicContainer';
import EducationContainer from './Containers/EducationContainer';
import TecnologyContainer from './Containers/TecnologyContainer';
import DemographyContainer from './Containers/DemographyContainer';
import FeedbackContainer from './Containers/FeedbackContainer';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Home />
        <GeneralContainer />
        <BasicContainer />
        <EducationContainer />
        <TecnologyContainer />
        <DemographyContainer />
        <FeedbackContainer />
    </div>
      <Footer />
      </>
  );
}

export default App;

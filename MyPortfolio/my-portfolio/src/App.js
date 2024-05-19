import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navigation from './Header';
import OurDetails from './Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import AboutMe from './About';
import Myskills from './Skills';

function App() {
  return (
    <div className="">
      <Navigation/>
    <Myskills/>
      <OurDetails/>
      <AboutMe/>
    </div>
  );
}

export default App;

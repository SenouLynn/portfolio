import { Switch, Route } from 'react-router-dom'
import './styles/portfolio.css';


//<--- Components --->//
import Nav from './newcomponents/Nav'
import Home from './newcomponents/Home'
import About from './newcomponents/About'
import Projects from './components/Projects'
import Work from './components/Work'
import Footer from './components/Footer'

function App() {
  return (
    <div className="global-body">
      <div className="body">

      <Nav />
      <Home />
      <About />
      {/* <Projects /> */}
      {/* <Work />   */}
      {/* <Footer /> */}

      </div>
    </div>
  );
}

export default App;

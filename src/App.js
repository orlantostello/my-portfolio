import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import ReturnToTop from './components/ReturnToTop';
import Sidebar from './components/Sidebar';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />

      <Sidebar />
      <SocialLinks />
      <ReturnToTop />
    </div>
  );
}

export default App;

import React from 'react';
import './app.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import Heropage from './components/Heropage';
import Empty from './components/Empty';
import Short from './components/Short';
import Mentors from './components/Mentors';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();


function App() {
  return ( 
    <Router>
      <Navbar/>
      <Heropage/>
      <Empty/>
      <Short/>
      <Empty/>
      <Mentors/>
      <Empty/>
      <Footer/>
    </Router>

  )
}

export default App;
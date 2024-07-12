import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Videos from "./Videos";

import About from './Podcast';
import Landingpage from "./LandingPage";
import Navbar from "./Navbar";



function App() {
  return (
    <Router>
      <div>
        <Navbar/>
       

        <Routes>
          <Route path="/" element={<Landingpage />}/>
          <Route path="/podcast" element={<About/>}/>
           <Route path="/videos" element={<Videos />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          

        </Routes>
      </div>
    </Router>
  );
}
export default App;

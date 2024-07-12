


// import './App.css';
// import About from './Podcast.js';
// const Info=()=>{
//   return(
//     <About/>
//   );
// }

// export default Info;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Podcast';

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<About/>} />
          {/* <Route path="/videos" element={<Videos />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;

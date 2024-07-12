

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./Blogs";
import Blogstwo from "./Blogstwo";
function App() {
 

  return (
    <Router>
     
      <div className="App">
        

        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/Blogstwo" element={<Blogstwo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

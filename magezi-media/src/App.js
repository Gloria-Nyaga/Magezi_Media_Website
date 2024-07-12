
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Files from './Files';
import Nakato from './Files';
import Valentine from './Files';

function App() {
  return (
    <Router>

    
    <div className="App">
    
      <Routes>
      
        <Route path='/' element={<Portfolio/> }/>
        <Route path='/file' element={<Files/>}/>
        <Route path='/nakato' element={<Nakato/>}/>
        <Route path='/val' element={<Valentine/>}/>
      </Routes>
      <Footer/>
     
    </div>
    </Router>
  );
}

export default App;

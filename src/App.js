import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EBook from './pages/EBook';
import Another from './pages/Another';

function App() {
  
  const toggleDisplay = () => {
    const popup = document.querySelector('.popup-container')
      popup.style.display = 'flex'
      setTimeout(() => {
        popup.style.opacity = '1'
      }, 1);
}

const timeOutPopup = () => {
    return setTimeout(() => {
        toggleDisplay()
    }, 4000);
}

useEffect(() => {
    timeOutPopup()
}, [])
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/another" element={<Another/>}/>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/e-book" element={<EBook/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;

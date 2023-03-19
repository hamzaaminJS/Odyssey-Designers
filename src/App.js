import './styles/main.scss'
import { BrowserRouter as Router, Routes, Switch, Route, Link } from 'react-router-dom';
import Main from './pages/Main'
import LandingPage from './pages/LandingPage';
import EBook from './pages/EBook';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/e-book" element={<EBook/>}/>
      </Routes>
    </Router>
  );
}

export default App;

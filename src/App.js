import React from 'react';
import './App.css';
import './styles/Navbar.css';
import TimeLine from './pages/Timeline';
import Background from './pages/Background';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <div className="App">
      <header> <nav>
            <ul className="nav__links">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                {/* <Link to="/timeline">TimeLine</Link> */}

                </li>
            </ul>
        </nav> 
    </header>
<Background>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/timeline" element={<TimeLine />} />
        </Routes>

</Background>
      </div>
    </Router>
  );
}

export default App;

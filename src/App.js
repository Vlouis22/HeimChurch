import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Watchlive from './pages/Watchlive';
import Offering from './pages/Offering';
import Baptizing from './pages/Baptizing';
import Calendar from './pages/Calendar';
import Ride from './pages/Ride';
import Prayer from './pages/Prayer';
import Contact from './pages/Contact';
import Youth from './pages/Youth';
import Kids from './pages/Kids';
import Womens from './pages/Womens';
import Others from './pages/Others';

function App() {
  return (
    <Router>
       <div className="App"></div>
       <Navbar/>
       <div className='content'>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/Home" element={<Home/>}></Route>
            <Route exact path="/About" element={<About/>}></Route>
            <Route exact path="/Watchlive" element={<Watchlive/>}></Route>
            <Route exact path="/Baptizing" element={<Baptizing/>}></Route>
            <Route exact path="/Offering" element={<Offering/>}></Route>
            <Route exact path="/Calendar" element={<Calendar/>}></Route>
            <Route exact path="/Ride" element={<Ride/>}></Route>
            <Route exact path="/Prayer" element={<Prayer/>}></Route>
            <Route exact path="/Contact" element={<Contact/>}></Route>
            <Route exact path="/Youth" element={<Youth/>}></Route>
            <Route exact path="/Womens" element={<Womens/>}></Route>
            <Route exact path="/Kids" element={<Kids/>}></Route>
            <Route exact path="/Others" element={<Others/>}></Route>
        </Routes>
       </div>
    </Router>
  );
}

export default App;

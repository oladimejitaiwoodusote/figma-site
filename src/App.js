import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about_us' element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

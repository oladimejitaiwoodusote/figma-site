import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about_us' element={<AboutUs/>}/>
      </Routes>
    </>
  );
}

export default App;

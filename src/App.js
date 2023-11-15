import  { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Booking from './pages/Booking'
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/reservations' element={<Booking/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

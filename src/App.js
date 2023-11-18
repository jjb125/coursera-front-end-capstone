import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Main  from './components/Main'
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reservations' element={<Booking />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;

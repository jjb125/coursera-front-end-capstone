import { Link } from 'react-router-dom'
import restaurantFood from '../assets/restauranfood.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className='hero-left'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <Link className='btn btn-alt' to='/reservations'>
          Reserve a table
        </Link>
      </div>
      <div className='hero-right'>
        <img src={restaurantFood} alt='Restaurant food' />
      </div>
    </section>
  );
};

export default Hero;
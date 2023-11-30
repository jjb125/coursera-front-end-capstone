import cust01img from '../assets/customer01.jpg'
import cust02img from '../assets/customer02.jpg'
import cust03img from '../assets/customer03.jpg'
import cust04img from '../assets/customer04.jpg'
import './Testimonials.css'
import TestimonialCard from './TestimonialCard'

const reviews = [
  {
    name: 'Antony Clifton',
    image: cust01img,
    rating: 3.5,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: 'Brandon Ming',
    image: cust02img,
    rating: 5,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: 'Tamika Jackson',
    image: cust03img,
    rating: 4.5,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: 'Maria Sanchez',
    image: cust04img,
    rating: 5,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
]

export default function Testimonials() {
  return (
    <section className='testimonials'>
      <div className='testimonials-header'>
        <h2>Hear from our customers!</h2>
      </div>
      {reviews.map((review, index) =>
        <TestimonialCard key={index} review={review} />)}
    </section>
  );
};

import photoA from '../assets/Mario and Adrian A.jpg';
import photoB from '../assets/Mario and Adrian B.jpg';
import './About.css';

export default function About() {
  return (
    <section className='about'>
      <div className="about-left">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum. Sed ut 
          perspiciatis unde omnis iste natus error sit voluptatem accusantium 
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
          inventore veritatis et quasi architecto beatae vitae dicta sunt 
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
          voluptatem sequi nesciunt.
        </p>
      </div>
      <div className="about-right">
        <img src={photoA} alt="Chefs Mario and Adrian" />
        <img src={photoB} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};
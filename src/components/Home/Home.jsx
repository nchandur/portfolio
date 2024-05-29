import { TypeAnimation } from 'react-type-animation';
import ButtonLight from '../ButtonLight/ButtonLight';
import "./Home.css";

const Home = () => {
  return (
    <div id="home" className='home'>
      <h1>Hello there! My name is <span>Nischal Chandur.</span></h1>
      <div className='type-animation'>
        <TypeAnimation
          sequence={[
            'I am a Data Scientist.',
            1000,
            'I am a Data Engineer.',
            1000,
            'I am a Data Analyst.',
            1000
          ]}
          wrapper="div"
          speed={10}
          style={{ fontSize: '4rem', display: 'inline-block' }}
          repeat={Infinity}
        />

      </div>
      <div className='know-more'>
        <a href="#about"><ButtonLight text="Know More" /></a>
      </div>
    </div>
  );
};

export default Home;

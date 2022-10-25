import './Home.css';
import art1 from './art-1.jpeg'
import art2 from './art-2.jpeg'
import art3 from './art3.jpg'
import art4 from './art4.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

const Slideimages=[art1,art2,art3,art4];
const delay = 4000;

const Home=()=>{
  const [index, setIndex]=React.useState(0);
  const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === Slideimages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <home><h1 className="h1-home"><div className='slideshow'>
      <div className='slideshowSlider' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        <div className='slide'>
          {Slideimages.map((imageslide, index) => (
            <div className='slide' key={index}>
              <img src={imageslide} alt="your works" className='slide' />
            </div>
          ))}
        </div>
      </div>
    </div><div className="slideshowDots">
        {Slideimages.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            } }
          ></div>))}
      </div>
      <div>Welcome to the NYU art community !</div>
    </h1>
    <div className='g-back'>
    <div className='p1-home'>Popular Work</div>
        <gall className='gallery'>
          <img src={art2}/>
          <img src={art3}/>
          <img src={art4}/>
          <img src={art2}></img>
          <img src={art1}></img>
        </gall>
        </div>
      </home>
  )
};


// make this component available to be imported into any other file
export default Home;

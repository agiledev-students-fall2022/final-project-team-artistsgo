import { Link } from 'react-router-dom'
import './ProductListing.css'
import art1 from './mug1.png'
import art2 from './mug2.png'
import art3 from './mug3.png'
import art4 from './mug4.png'
import React from 'react'

/**
 * A React component that represents the ProductListing page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
 const Slideimages=[art1,art2,art3,art4];
 const delay = 4000;

const ProductListing = props => {
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
    <>
    <div className = "intro-text">
    {/* later should be filled with product name from DB */}
    <p className="title">Checkered Handmade Ceramic Mug</p>
    {/* later should be filled with user name from DB */}
    <p className="profile-link">
            <Link to="/ProfilePage">Foo Barstein</Link>
     </p>
    {/* later should be filled with product price from DB */}
    <p> $15.00 </p>
    </div>


    <home><h1 ><div className='slideshow'>
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
    </h1>
    </home>
  


    {/* later should be filled with product description from DB */}
    <p className = "description">This is a handmade mug that is glazed in a checkered pattern. It was handmade by me!
        It can handle the dishwasher, but if you can, I would hand wash it more often than not.
        Price is negotiable, but please be aware handmade items take a lot of time and love.
        It's so cute and makes an amazing addition to any shelf. It'll make your morning coffee
        so much more fun! If your interested please email me at foobarstein@gmail.com
    </p>

  </>
  )
}

// make this component available to be imported into any other file
export default ProductListing
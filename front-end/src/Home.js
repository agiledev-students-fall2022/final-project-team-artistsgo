import './Home.css';
import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const delay = 4000;


const Home=props=>{

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/product")
    .then(apiResponse => {
      setProducts(apiResponse.data.products);
      //console.log("rendered 1")
    })
    .catch(err => {
      throw(err)
    })
  }, [])
  
  const Slideimages=[];
  products.forEach(product=>{Slideimages.push(product? product.image: "")});

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
              <img src={imageslide} alt="works" className='slide' />
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
          <a href={products[0]?"ProductListing?product_id=" + products[0].name:""}><img src={products[0]?products[0].image:""}/>
          <desc>{products[0]?products[0].name:""}</desc>
          <p className="gallery-artist-link">
            <artists><Link to ="/ProfilePage">{products[0]?products[0].author_username:""}</Link></artists>
          </p>
          </a>
          <a href={products[0]?"ProductListing?product_id=" + products[1].name:""}><img src={products[1]?products[1].image:""}/>
          <desc>{products[1]?products[1].name:""}</desc>
          <p className="gallery-artist-link">
            <artists><Link to ="/ProfilePage">{products[1]?products[1].author_username:""}</Link></artists>
          </p>
          </a>
          <a href={products[0]?"ProductListing?product_id=" + products[2].name:""}><img src={products[2]?products[2].image:""}/>
          <desc>{products[2]?products[2].name:""}</desc>
          <p className="gallery-artist-link">
            <artists><Link to ="/ProfilePage">{products[2]?products[2].author_username:""}</Link></artists>
          </p>
          </a>
          <a href={products[0]?"ProductListing?product_id=" + products[3].name:""}><img src={products[3]?products[3].image:""}/>
          <desc>{products[3]?products[3].name:""}</desc>
          <p className="gallery-artist-link">
            <artists><Link to ="/ProfilePage">{products[3]?products[3].author_username:""}</Link></artists>
          </p>
          </a>
          <a href={products[0]?"ProductListing?product_id=" + products[4].name:""}><img src={products[4]?products[4].image:""}/>
          <desc>{products[4]?products[4].name:""}</desc>
          <p className="gallery-artist-link">
            <artists><Link to ="/ProfilePage">{products[4]?products[4].author_username:""}</Link></artists>
          </p>
          </a>
          <a href={products[0]?"ProductListing?product_id=" + products[5].name:""}><img src={products[5]?products[5].image:""}/>
          <desc>{products[5]?products[5].name:""}</desc>
          <p className="gallery-artist-link">
            <artists><Link to ="/ProfilePage">{products[5]?products[5].author_username:""}</Link></artists>
          </p>
          </a>
        </gall>
        </div>
      </home>
  )
};


// make this component available to be imported into any other file
export default Home;

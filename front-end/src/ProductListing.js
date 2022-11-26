import { Link } from 'react-router-dom'
import './ProductListing.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

/**
 * A React component that represents the ProductListing page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
 const delay = 4000;

const ProductListing = props => {

  const [product, setProduct] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get("product_id"));
    axios.get(`http://localhost:3001/product/${searchParams.get("product_id")}`)
    .then(apiResponse => {
      console.log(apiResponse)
      setProduct(apiResponse.data.product[0]);
    })
    .catch(err => {
      throw(err)
    })
  }, [])

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

  const Slideimages=[product? product.image: ""];



  return (
    <>
    <div className = "intro-text">
    {/* later should be filled with product name from DB */}
    <p className="title">{product? product.name: ""}</p>
    {/* later should be filled with user name from DB */}
    <p className="profile-link">
            {/* <Link to="/ProfilePage">{product? product.author_username: ""}</Link> */}

            <Link to= "/ProfilePage"
            state={{
              id : product? product.author_username: ""
            }}>{product? product.author_username: ""}</Link>
     </p>
    {/* later should be filled with product price from DB */}
    <p className="price"> ${product? product.price: ""}</p>
    </div>


    <home><h1 ><div className='slideshow'>
      <div className='slideshowSlider' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        <div className='slide'>
          {Slideimages.map((imageslide, index) => (
            <div className='slide' key={index}>
              <img src={imageslide} alt="your works" className='product-listing-photo slide' />
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
    <p className = "description">{product? product.description: ""}
    </p>

  </>
  )
}

export default ProductListing
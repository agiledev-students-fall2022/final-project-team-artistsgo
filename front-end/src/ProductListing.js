import { Link } from 'react-router-dom'
import './ProductListing.css'
import art1 from './mug1.png'
import art2 from './mug2.png'
import art3 from './mug3.png'
import art4 from './mug4.png'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

/**
 * A React component that represents the ProductListing page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
 const Slideimages=[art1,art2,art3,art4];
 const delay = 4000;

//  const useFetch = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_SERVER_HOSTNAME_PRODUCT}`).then(async res => {
//       if (res.status !== 200) {
//         setData('Error');
//       }
//       const data = await res.json();
//       setData(data);
//     });


//   }, [setData, `${process.env.REACT_APP_SERVER_HOSTNAME_PRODUCT}`]);

//   return [data];
// }

const ProductListing = props => {

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/product")
    .then(apiResponse => {
      // console.log(apiResponse.data[0])
      setProduct(apiResponse.data[0]);
    })
    .catch(err => {
      throw(err)
    })
  }, [])

  // useEffect(()=>{
  //   const [unauthData] = useFetch();
  //   console.log(unauthData)
  // },[])

  // const [products, setProducts] = useState([])
  // const [loaded, setLoaded] = useState(false)
  // const [error, setError] = useState('')
  // const [feedback, setFeedback] = useState('')

  // const fetchProducts = () => {
  //   // setMessages([])
  //   // setLoaded(false)
  //   axios
  //     .get(`${process.env.REACT_APP_SERVER_HOSTNAME_PRODUCT}`)
  //     .then(response => {
  //       // axios bundles up all response data in response.data property
  //       const products = response.data.products
  //       setProducts(products)
  //     })
  //     .catch(err => {
  //       setError(err)
  //     })
  //     .finally(() => {
  //       // the response has been received, so remove the loading icon
  //       setLoaded(true)
  //     })
  // }

  // useEffect(() => {
  //   // fetch messages this once
  //   fetchProducts()

  //   // set a timer to load data from server every n seconds
  //   const intervalHandle = setInterval(() => {
  //     fetchProducts()
  //   }, 5000)

  //   // return a function that will be called when this component unloads
  //   return e => {
  //     // clear the timer, so we don't still load messages when this component is not loaded anymore
  //     clearInterval(intervalHandle)
  //   }
  // }, []) 

  // // const [products] = useEffect();



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
    <p className="title">{product? product.name: ""}</p>
    {/* later should be filled with user name from DB */}
    <p className="profile-link">
            <Link to="/ProfilePage">{product? product.author_username: ""}</Link>
     </p>
    {/* later should be filled with product price from DB */}
    <p className="price"> ${product? product.price: ""}</p>
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
    <p className = "description">{product? product.description: ""}
    </p>

  </>
  )
}

// make this component available to be imported into any other file
export default ProductListing
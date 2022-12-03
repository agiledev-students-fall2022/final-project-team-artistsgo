import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

/**
 * A React component that represents an individual artowrk card, to be displayed on pages like Marketplace, Arts and Crafts, etc.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Card = props => {
  const url = "http://localhost:3001/";
  const [liked, setLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(props.collection.likes)
  function like() {
    if(liked){
      setNumLikes(numLikes - 1)
    } else {
      setNumLikes(numLikes + 1)
    }
    setLiked(!liked);
  }
  return (
  <div className="card-container">
    <Link className='card-container' to={`/ProductListing?product_id=${props.name}`}>
        <img src={url+props.image} alt="Image" />
        <h3>{props.name}</h3>
        {props.price? <p className="price">${props.price.toFixed(2)}</p>: <></>}
        <p className='author'>{props.author}</p>
        <p className='description'>{props.description}</p>
    </Link>  
    <div onClick={like} className={`like-button ${liked? "clicked": ""}`}>&#10084; {numLikes? numLikes: ""}</div>
  </div>
  )
}

// make this component available to be imported into any other file
export default Card
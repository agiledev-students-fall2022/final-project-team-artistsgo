import { Link } from 'react-router-dom'
import "./Card.css"

/**
 * A React component that represents an individual artowrk card, to be displayed on pages like Marketplace, Arts and Crafts, etc.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Card = props => {
  return (
  <>
    <Link className='card-container' to={`/${props.path}`}>
        <img src={props.image} alt="Image" />
        <h3>{props.name}</h3>
        <p className='author'>{props.author}</p>
        <p className='description'>{props.description}</p>
    </Link>  
  </>
  )
}

// make this component available to be imported into any other file
export default Card

import './Music.css'
import { Link } from 'react-router-dom'
import Card from './elements/Card'
import mug1 from "./mug1.png"
import mug2 from "./mug2.png"
import mug3 from "./mug3.png"
import mug4 from "./mug4.png"

/**
 * A React component that represents the Arts and Crafts page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Music = props => {
  return (
  <>
    <div>
      <h1>Music</h1>
      <h2>Popular Work</h2>
      <div className='cards-container'>
        <Card image={mug1} name="Come Home the Kids Miss You" path="ProductListing" author="Jack Harlow" description="Jack Harlow's second studio album."/>
        <Card image={mug2} name="Hotel California" path="ProductListing" author="The Eagles" description="An American classic, the Eagles' fifth studio album."/>
        <Card image={mug3} name="AM" path="ProductListing" author="Arctic Monkeys" description="Arctic Monkeys fifth album, released back in 2013 when they were good."/>
        <Card image={mug4} name="The Dark Side of the Moon" path="ProductListing" author="Pink Floyd" description="One of those albums that you have to sit down and listen to start to finish."/>
        <Card image={mug1} name="Come Home the Kids Miss You" path="ProductListing" author="Jack Harlow" description="Jack Harlow's second studio album."/>
        <Card image={mug2} name="Hotel California" path="ProductListing" author="The Eagles" description="An American classic, the Eagles' fifth studio album."/>
      </div>
    </div>  
  </>
  )
}

// make this component available to be imported into any other file
export default Music
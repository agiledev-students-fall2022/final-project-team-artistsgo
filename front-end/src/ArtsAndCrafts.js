
import './ArtsAndCrafts.css'
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
const ArtsAndCrafts = props => {
  return (
  <>
    <div>
      <h1>Arts and Crafts</h1>
      <h2>Popular Work</h2>
      <div className='cards-container'>
        <Card image={mug1} name="Checker Mug" path="ProductListing" author="Foo Barstien" description="A mug with an endearing checkerboard pattern. Handmade."/>
        <Card image={mug2} name="Animal Mug" path="ProductListing" author="Lauren Ipsum" description="A mug featuring different animals. Handmade."/>
        <Card image={mug3} name="Rainbow Mug" path="ProductListing" author="Jane Doe" description="A rainbow colored mug. Handmade"/>
        <Card image={mug4} name="Carpet" path="ProductListing" author="Gengis Khan" description="A persian-inspired handmade carpet."/>
        <Card image={mug1} name="Checker Mug" path="ProductListing" author="Foo Barstien" description="A mug with an endearing checkerboard pattern. Handmade."/>
        <Card image={mug2} name="Animal Mug" path="ProductListing" author="Lauren Ipsum" description="A mug featuring different animals. Handmade."/>
      </div>
    </div>  
  </>
  )
}

// make this component available to be imported into any other file
export default ArtsAndCrafts
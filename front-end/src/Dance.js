
import './Dance.css'
import { Link } from 'react-router-dom'
import Card from './elements/Card'
import dance1 from "./dance/dance1.jpg"
import dance2 from "./dance/dance2.jpg"
import dance3 from "./dance/dance3.jpg"
import dance4 from "./dance/dance4.png"

/**
 * A React component that represents the Dance page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Dance = props => {
  return (
  <>
    <div>
      <h1>Dance</h1>
      <h2>Popular Work</h2>
      <div className='cards-container'>
        <Card image={dance1} name="Contemporary Cohort" path="ProductListing" author="Foo Barstien" description="A contemporary dance group showing their chops."/>
        <Card image={dance2} name="Ballet Ballad" path="ProductListing" author="Lauren Ipsum" description="Timeless, classic, beautiful ballet."/>
        <Card image={dance3} name="Motion in the Ocean" path="ProductListing" author="Jane Doe" description="Watch how they move: fluid like water, strong like the breeze."/>
        <Card image={dance4} name="Hip Hop Hour" path="ProductListing" author="Gengis Khan" description="Are they dabbing? click here to learn more."/>
        <Card image={dance1} name="Contemporary Cohort" path="ProductListing" author="Foo Barstien" description="A contemporary dance group showing their chops."/>
        <Card image={dance2} name="Ballet Ballad" path="ProductListing" author="Lauren Ipsum" description="Timeless, classic, beautiful ballet."/>
      </div>
    </div>  
  </>
  )
}

// make this component available to be imported into any other file
export default Dance
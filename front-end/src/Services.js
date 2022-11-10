
import './Services.css'
import { Link } from 'react-router-dom'
import Card from './elements/Card'
import mug1 from "./homeart/mug1.png"
import mug2 from "./homeart/mug2.png"
import mug3 from "./homeart/mug3.png"
import mug4 from "./homeart/mug4.png"

/**
 * A React component that represents the Arts and Crafts page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Services = props => {
  return (
  <>
    <div>
      <h1>Services</h1>
      <h2>Popular Services</h2>
      <div className='cards-container'>
        <Card image={mug1} name="Pottery Glazing" path="ProductListing" author="Foo Barstien" description="Come get your pottery glazed."/>
        <Card image={mug2} name="Film Development" path="ProductListing" author="Lauren Ipsum" description="Come get your film developed."/>
        <Card image={mug3} name="Dance Lessons" path="ProductListing" author="Jane Doe" description="Come get your dance skills sharpened."/>
        <Card image={mug4} name="Crochet Lessons" path="ProductListing" author="Gengis Khan" description="Come learn how to crochet."/>
        <Card image={mug1} name="Pottery Glazing" path="ProductListing" author="Foo Barstien" description="Come get your pottery glazed."/>
        <Card image={mug2} name="Film Development" path="ProductListing" author="Lauren Ipsum" description="Come get your film developed."/>
      </div>
    </div>  
  </>
  )
}

// make this component available to be imported into any other file
export default Services
import { Link } from 'react-router-dom'
import './Home.css'
import art1 from './art-1.jpeg'
import art2 from './art-2.jpeg'

const Home = props => {
  return (
    <home className="Home-top">
      <h1 className="h1">
        Welcome to the NYU art community ! 
      <img src={art1} className="topimg"/>
      <img src={art2} className="topimg"/>

      </h1>
      <p className="p1">
         Popular Work
      </p>
    </home>
  )
}

// make this component available to be imported into any other file
export default Home

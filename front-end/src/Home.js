import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import './Home.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Home = props => {
  return (
    <>
      <h1>Home page place holder</h1>
      <h>The links below are just there so we can navigate before making the home page</h>
      <p>
         <Link to="/ProductListing">Product Listing Page</Link>.
      </p>
      <p>
        <Link to="/ProfilePage">Profile Page</Link>.
      </p>
    </>
  )
}

// make this component available to be imported into any other file
export default Home

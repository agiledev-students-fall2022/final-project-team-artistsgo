import { Link } from 'react-router-dom'
import './ProductListing.css'
import IMG from './CeramicCup.png'

/**
 * A React component that represents the ProductListing page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const ProductListing = props => {
  return (
    <>
    <div className = "intro-text">
    {/* later should be filled with product name from DB */}
    <h1>Checkered Handmade Ceramic Mug</h1>
    {/* later should be filled with user name from DB */}
    <h1 className="profile-link">
            <Link to="/ProfilePage">Isabel Chen</Link>
     </h1>
    {/* later should be filled with product price from DB */}
    <h1> $15.00 </h1>
    </div>
        {/* later should be filled with product picture from DB */}
        <img className="image" src={IMG} alt="Our fabulous logo" />

    {/* later should be filled with product description from DB */}
    <p className = "description">This is a handmade mug that is glazed in a checkered pattern. It was handmade by me!
        It can handle the dishwasher, but if you can, I would hand wash it more often than not.
        Price is negotiable, but please be aware handmade items take a lot of time and love.
        It's so cute and makes an amazing addition to any shelf. It'll make your morning coffee
        so much more fun! If your interested please email me at foobarstein@gmail.com
    </p>

  </>
  )
}

// make this component available to be imported into any other file
export default ProductListing
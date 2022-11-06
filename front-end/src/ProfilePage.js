
import './ProfilePage.css'
import profilePhoto from './profile-photo.png'
import productPhoto from './mug1.png'
import { Link } from 'react-router-dom'


/**
 * A React component that represents the ProfilePage page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const ProfilePage = props => {
  return (
    <>
    
    <div>

     </div>
      {/* later should be filled with product picture from DB */}
      <img className="profile-picture" src={profilePhoto} alt="Profile Photo" />

          {/* later should be filled with user name from DB */}
      <p className="users-name">
           Foo Barstein
     </p>
     <h className="user-name">
            @fooceramics
     </h>


    <div className="description-style">
    {/* later should be filled with product description from DB */}
    <p className = "profile-description">Hi there! My name is Foo Barstein and I specialize in ceramics.
    Specifically, I specialize in handmade and natural shaped mugs and cups. I'm a student at NYU and I
    am a computer science major, but I create these items in my free time! Thank you for visitng my page
    and I hope you find some joy in my products. Please reach out to me if you have any questions or concerns!
    <br></br>
    Contact me at: foobarstein@gmail.com or at 555-123-4567
    </p>

    </div>


    <div className="full-product">
    <a href = "/ProductListing">
    <img className="featured-works" src={productPhoto} alt="Profile Photo" />
    </a>
    <p><Link to="/ProductListing">Checkered Ceramic Mug</Link></p>
    </div>

    <div className="full-product">
    <a href = "/ProductListing">
    <img className="featured-works" src={productPhoto} alt="Profile Photo" />
    </a>
    <p><Link to="/ProductListing">Checkered Ceramic Mug</Link></p>
    </div>

    <div className="full-product">
    <a href = "/ProductListing">
    <img className="featured-works" src={productPhoto} alt="Profile Photo" />
    </a>
    <p><Link to="/ProductListing">Checkered Ceramic Mug</Link></p>
    </div>

    <div className="full-product">
    <a href = "/ProductListing">
    <img className="featured-works" src={productPhoto} alt="Profile Photo" />
    </a>
    <p><Link to="/ProductListing">Checkered Ceramic Mug</Link></p>
    </div>


  </>
  )
}

// make this component available to be imported into any other file
export default ProfilePage
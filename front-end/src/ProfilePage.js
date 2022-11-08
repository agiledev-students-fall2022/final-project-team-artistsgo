
import './ProfilePage.css'
import profilePhoto from './profile-photo.png'
import productPhoto from './mug1.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


/**
 * A React component that represents the ProfilePage page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const ProfilePage = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/user")
    .then(apiResponse => {
      // console.log(apiResponse.data[0])
      setUser(apiResponse.data[0]);
    })
    .catch(err => {
      throw(err)
    })
  }, [])
  return (
    <>
    
    <div>

     </div>
      {/* later should be filled with product picture from DB */}
      <img className="profile-picture" src={user? user.image: ""} alt="Profile Photo" />

          {/* later should be filled with user name from DB */}
      <p className="users-name">
           {user? `${user.first_name} ${user.last_name}`: ""}
     </p>
     <h className="user-name">
            @{user? user.username: ""}
     </h>


    <div className="description-style">
    {/* later should be filled with product description from DB */}
    <p className = "profile-description">
    {user? user.profile_description: ""}
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

import './ProfilePage.css'
import productPhoto from './homeart/mug1.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'


/**
 * A React component that represents the ProfilePage page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */


const ProfilePage = props => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  // const { from } = location.state
  // const state  = this.props.location.state.username;

  // useEffect(() => {
  //   axios.get("http://localhost:3001/user")
  //   .then(apiResponse => {
  //     const users=apiResponse.data.users[0]
  //     // console.log(apiResponse.data[0])
  //     setUser(users);
  //   })
  //   .catch(err => {
  //     throw(err)
  //   })
  // }, [])

  const [searchParams] = useSearchParams();

  // BELOW IS THE ACTUAL ONE WHEN WE HAVE REAL DATA

  // useEffect(() => {
  //   console.log(searchParams.get("location.state.id"));
  //   axios.get(`http://localhost:3001/user/${"location.state.id"}`)
  //   .then(apiResponse => {
  //     console.log(apiResponse)
  //     setUser(apiResponse.data.user[0]);
  //   })
  //   .catch(err => {
  //     throw(err)
  //   })
  // }, [])

  useEffect(() => {
    console.log(searchParams.get("igeniede"));
    axios.get(`http://localhost:3001/user/${"igeniede"}`)
    .then(apiResponse => {
      console.log(apiResponse)
      setUser(apiResponse.data.user[0]);
    })
    .catch(err => {
      throw(err)
    })
  }, [])

  const productList = [];

  for (let product of user.products) {
    productList.push(<li>{product}</li>)
  }

  // console.log(user.products)



  return (
    <>
    
    <div>

     </div>
      {/* later should be filled with product picture from DB */}
      <img className="profile-picture" src={user? user.profilepic: ""} alt="Profile Photo" />

          {/* later should be filled with user name from DB */}
      <p className="users-name">
           {user? `${user.first_name} ${user.last_name}`: ""}
     </p>
     <h className="user-name">
            @{user? user.username: ""}
     </h>
     <br></br>
     <h className="user-name">
            {user? user.email: ""}
     </h>


    <div className="description-style">
    {/* later should be filled with product description from DB */}
    <p className = "profile-description">
    {user? user.profiledescription: ""}
    </p>

    </div>


    <div>
      {productList.map(product => {
        return (
          <div>
            
            <h2>name: {product}</h2>
            <hr />
          </div>
        );
      })}
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
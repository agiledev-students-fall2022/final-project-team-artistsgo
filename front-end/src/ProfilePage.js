import "./ProfilePage.css";
import productPhoto from "./homeart/mug1.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Card from "./elements/Card";

/**
 * A React component that represents the ProfilePage page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

const ProfilePage = (props) => {
  const [user, setUser] = useState(null);
  const [collection, setCollection] = useState(null);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const currentUser = location.state.id;

  useEffect(() => {
    axios
      .get("/api/product")
      .then((apiResponse) => {
        setCollection(apiResponse.data.products);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  useEffect(() => {
    console.log(searchParams.get("username"));
    axios
      .get(`/api/user/${currentUser}`)
      .then((apiResponse) => {
        console.log(apiResponse);
        setUser(apiResponse.data.user[0]);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  console.log(user);

  return (
    <>
      <div></div>
      {/* later should be filled with product picture from DB */}
      <img
        className="profile-picture"
        src={user ? user.profilepic : ""}
        alt="Profile Photo"
      />

      {/* later should be filled with user name from DB */}
      <p className="users-name">
        {user ? `${user.first_name} ${user.last_name}` : ""}
      </p>
      <h className="user-name">@{user ? user.username : ""}</h>
      <br></br>
      <h className="user-name">{user ? user.email : ""}</h>

      <div className="description-style">
        {/* later should be filled with product description from DB */}
        <p className="profile-description">
          {user ? user.profiledescription : ""}
        </p>
      </div>

      <div className="cards-container">
        {collection
          ? collection.map((item, i) => {
              if (i < 10 && item.author_username === currentUser) {
                return (
                  <Card
                    collection={collection ? collection[i] : ""}
                    image={collection ? collection[i].image : ""}
                    name={collection ? collection[i].name : ""}
                    path="ProductListing"
                    author={collection ? collection[i].author_username : ""}
                    description={collection ? collection[i].description : ""}
                    key={"item-" + i}
                    product_id={collection ? collection[i]._id : ""}
                  />
                );
              }
            })
          : ""}
      </div>
    </>
  );
};

// make this component available to be imported into any other file
export default ProfilePage;

import "./Dance.css";
import { Link } from "react-router-dom";
import Card from "./elements/Card";
import { useState, useEffect } from "react";
import axios from "axios";

/**
 * A React component that represents the Dance page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Dance = (props) => {
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    axios
      .get("/product/collection/dance")
      .then((apiResponse) => {
        // console.log(apiResponse.data[0])
        setCollection(apiResponse.data.products);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <>
      <div>
        <h1>Dance</h1>
        <h2>Popular Work</h2>
        <div className="cards-container">
          {collection
            ? collection.map((item, i) => {
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
              })
            : ""}
        </div>
      </div>
    </>
  );
};

// make this component available to be imported into any other file
export default Dance;

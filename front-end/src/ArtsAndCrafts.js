import "./ArtsAndCrafts.css";
import { Link } from "react-router-dom";
import Card from "./elements/Card";
import { useEffect, useState } from "react";
import axios from "axios";

/**
 * A React component that represents the Arts and Crafts page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const ArtsAndCrafts = (props) => {
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/product/collection/arts-and-crafts")
      .then((apiResponse) => {
        // console.log(apiResponse.data[0])
        console.log(apiResponse.data);
        setCollection(apiResponse.data.products);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <>
      <div>
        <h1>Arts and Crafts</h1>
        <h2>Popular Work</h2>
        <div className="cards-container">
          {collection
            ? collection.map((item, i) => {
                if (i < 10) {
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
          {/* <Card image={mug2} name="Animal Mug" path="ProductListing" author="Lauren Ipsum" description="A mug featuring different animals. Handmade."/>
        <Card image={mug3} name="Rainbow Mug" path="ProductListing" author="Jane Doe" description="A rainbow colored mug. Handmade"/>
        <Card image={mug4} name="Carpet" path="ProductListing" author="Gengis Khan" description="A persian-inspired handmade carpet."/>
        <Card image={mug1} name="Checker Mug" path="ProductListing" author="Foo Barstien" description="A mug with an endearing checkerboard pattern. Handmade."/>
        <Card image={mug2} name="Animal Mug" path="ProductListing" author="Lauren Ipsum" description="A mug featuring different animals. Handmade."/> */}
        </div>
      </div>
    </>
  );
};

// make this component available to be imported into any other file
export default ArtsAndCrafts;

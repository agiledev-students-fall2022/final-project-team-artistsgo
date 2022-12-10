import "./Home.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import SearchBar from './SearchBar';
//TESTING
import ReactSearchBox from "react-search-box";

const delay = 4000;
const Home = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/product")
      .then((apiResponse) => {
        setProducts(apiResponse.data.products);
        //console.log("rendered 1")
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  const url = "http://localhost:3001/";

  const Slideimages = [];
  for (let i = 0; i < 6; i++) {
    let product = products[i];
    Slideimages.push(product ? url + product.image : "");
  }
  const product1 = products[0];
  const product2 = products[1];
  const product3 = products[2];
  const product4 = products[3];
  const product5 = products[4];
  const product6 = products[5];

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === Slideimages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  //For search bar
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/searchbar")
      .then((apiResponse) => {
        setSearch(apiResponse.data.products);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const prodNames = [];
  search.forEach((product) => {
    prodNames.push(product ? product.name : "");
  });

  return (
    <home>
      {/* <div className="searchBar">
        <ReactSearchBox
        placeholder="Placeholder"
        value="Doe"
        //need correct data here
        data = {this.prodNames}
        callback={(record) => console.log(record)}
      />
      </div> */}

      <h1 className="h1-home">
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            <div className="slide">
              {Slideimages.map((imageslide, index) => (
                <div className="slide" key={index}>
                  <img src={imageslide} alt="works" className="slide" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="slideshowDots">
          {Slideimages.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
        <div>Welcome to the NYU art community !</div>
      </h1>
      <div className="g-back">
        <div className="p1-home">Popular Work</div>
        <div className="gallery">
          <a
            href={`/ProductListing?product_id=${
              products[0] ? products[0]._id : ""
            }`}
          >
            {" "}
            <img src={products[0] ? url + products[0].image : ""} />
            <desc>{products[0] ? products[0].name : ""}</desc>
            <p className="gallery-artist-link">
              <artists>
                <Link
                  to="/ProfilePage"
                  state={{
                    id: products[0] ? products[0].author_username : "",
                  }}
                >
                  {products[0] ? products[0].author_username : ""}
                </Link>
              </artists>
            </p>
          </a>
          <a
            href={`/ProductListing?product_id=${
              products[1] ? products[1]._id : ""
            }`}
          >
            {" "}
            <img src={products[1] ? url + products[1].image : ""} />
            <desc>{products[1] ? products[1].name : ""}</desc>
            <p className="gallery-artist-link">
              <artists>
                <Link
                  to="/ProfilePage"
                  state={{
                    id: products[1] ? products[1].author_username : "",
                  }}
                >
                  {products[1] ? products[1].author_username : ""}
                </Link>
              </artists>
            </p>
          </a>
          <a
            href={`/ProductListing?product_id=${
              products[2] ? products[2]._id : ""
            }`}
          >
            {" "}
            <img src={products[2] ? url + products[2].image : ""} />
            <desc>{products[2] ? products[2].name : ""}</desc>
            <p className="gallery-artist-link">
              <artists>
                <Link
                  to="/ProfilePage"
                  state={{
                    id: products[2] ? products[2].author_username : "",
                  }}
                >
                  {products[2] ? products[2].author_username : ""}
                </Link>
              </artists>
            </p>
          </a>
          <a
            href={`/ProductListing?product_id=${
              products[3] ? products[3]._id : ""
            }`}
          >
            <img src={products[3] ? url + products[3].image : ""} />
            <desc>{products[3] ? products[3].name : ""}</desc>
            <p className="gallery-artist-link">
              <artists>
                <Link
                  to="/ProfilePage"
                  state={{
                    id: products[3] ? products[3].author_username : "",
                  }}
                >
                  {products[3] ? products[3].author_username : ""}
                </Link>
              </artists>
            </p>
          </a>
          <a
            href={`/ProductListing?product_id=${
              products[4] ? products[4]._id : ""
            }`}
          >
            <img src={products[4] ? url + products[4].image : ""} />
            <desc>{products[4] ? products[4].name : ""}</desc>
            <p className="gallery-artist-link">
              <artists>
                <Link
                  to="/ProfilePage"
                  state={{
                    id: products ? products.author_username : "",
                  }}
                >
                  {products[4] ? products[4].author_username : ""}
                </Link>
              </artists>
            </p>
          </a>
          <a
            href={`/ProductListing?product_id=${
              products[5] ? products[5]._id : ""
            }`}
          >
            <img src={products[5] ? url + products[5].image : ""} />
            <desc>{products[5] ? products[5].name : ""}</desc>
            <p className="gallery-artist-link">
              <artists>
                <Link
                  to="/ProfilePage"
                  state={{
                    id: products[5] ? products[5].author_username : "",
                  }}
                >
                  {products[5] ? products[5].author_username : ""}
                </Link>
              </artists>
            </p>
          </a>
        </div>
      </div>
    </home>
  );
};

// make this component available to be imported into any other file
export default Home;

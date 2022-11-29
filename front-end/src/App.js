// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { component } from 'react';
import Home from './Home'
import ProductListing from './ProductListing';
import ProfilePage from './ProfilePage';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Login from './Login';
import Register from './Register';
import Aboutus from './Aboutus';
import ArtsAndCrafts from './ArtsAndCrafts';
import Dance from './Dance';
import Marketplace from './Marketplace';
import Services from './Services';
import Music from './Music';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
      </div>
    <Router>
      <Header/>
      <main className="App-main">
        <Routes>
          {/* a route for the home page */}
          <Route path="/" element={<Home />} />
          {/* a route for the product listing page */}
          <Route path="/ProductListing" element={<ProductListing />}></Route>
          {/* a route for the profile page */}
          <Route path="/ProfilePage" element={<ProfilePage />}></Route>
          <Route path ="/Login" element={<Login/>}></Route>
          <Route path ="/Register" element={<Register/>}></Route>
          {/* <Route path ="/SearchBar" element={<SearchBar/>}></Route> */}
          <Route path ="/Aboutus" element={<Aboutus/>}></Route>
          <Route path ="/Arts-And-Crafts" element={<ArtsAndCrafts/>}></Route>
          <Route path ="/Services" element={<Services/>}></Route>
          <Route path ="/Dance" element={<Dance/>}></Route>
          <Route path ="/Marketplace" element={<Marketplace/>}></Route>
          <Route path ="/Music" element={<Music/>}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  </div>
  );
}

export default App;

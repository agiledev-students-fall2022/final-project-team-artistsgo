// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
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
import Upload from './Upload';
import Faq from "./Faq";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

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
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          {/* <Route path="/post/:id" element={user ? <Post /> : <Navigate to="/login" />} ></Route> */}
          <Route path ="/Register" element={<Register/>}></Route>
          <Route path ="/Aboutus" element={<Aboutus/>}></Route>
          <Route path ="/Arts-And-Crafts" element={<ArtsAndCrafts/>}></Route>
          <Route path ="/Services" element={<Services/>}></Route>
          <Route path ="/Dance" element={<Dance/>}></Route>
          <Route path ="/Marketplace" element={<Marketplace/>}></Route>
          <Route path ="/Music" element={<Music/>}></Route>
          <Route path ="/Upload" element={<Upload/>}></Route>
          <Route path ="/Faq" element={<Faq/>}></Route>

        </Routes>
      </main>
      <Footer />
    </Router>
  </div>
  );
}

export default App;

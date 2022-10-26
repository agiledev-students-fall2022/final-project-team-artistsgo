// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import ProductListing from './ProductListing';
import ProfilePage from './ProfilePage';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Login from './Login';
import Register from './Register';
import ArtsAndCrafts from './ArtsAndCrafts';

function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
      </div>
    <Router>
      <Header />
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
          <Route path ="/Arts-And-Crafts" element={<ArtsAndCrafts/>}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  </div>
  );
}

export default App;

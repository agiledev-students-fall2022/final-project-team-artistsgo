// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import ProductListing from './ProductListing';
import ProfilePage from './ProfilePage';
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
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
          
        </Routes>
      </main>
      <Footer />
    </Router>
  </div>
  );
}

export default App;

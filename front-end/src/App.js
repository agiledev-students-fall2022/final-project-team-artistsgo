// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductListing from './ProductListing';
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <main className="App-main">
        <Routes>
          {/* a route for the product listing page */}
          <Route path="/" element={<ProductListing />}></Route>
          
        </Routes>
      </main>
      <Footer />
    </Router>
  </div>
  );
}

export default App;

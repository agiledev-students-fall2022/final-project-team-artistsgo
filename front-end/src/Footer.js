import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="Footer-footer">
      <p className="p1-footer">
        <div>Contact Us</div>
        <div>
          <Link to="/Faq"> FAQ </Link>
        </div>
        <div>
          <Link to="/Aboutus"> About us</Link>
        </div>
      </p>
      <p>&copy;2022. Team ArtistsGo. All rights reserved. </p>
    </footer>
  );
};

// make this component available to be imported into any other file
export default Footer;

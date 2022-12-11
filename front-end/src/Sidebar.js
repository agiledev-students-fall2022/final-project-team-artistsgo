//import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";
import axios from "axios";

const Sidebar = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("/api/user/info", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // if(data.isLoggedIn)
        console.log(data);
        if (data.user) setUser(data.user);
      });
  }, []);

  async function handleLogout(e) {
    e.preventDefault();

    localStorage.removeItem("token");
  }
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/Music">
        Music
      </a>
      <a className="menu-item" href="/Dance">
        Dance
      </a>
      <a className="menu-item" href="/Arts-And-Crafts">
        Arts & Crafts
      </a>
      <a className="menu-item" href="/Services">
        Services
      </a>
      <a className="menu-item" href="/Marketplace">
        Marketplace
      </a>
      <a className="menu-item" href="./Login">
        Login
      </a>
      <a className="menu-item" href="/Upload">
        Upload
      </a>
      {user.username && (
        <a className="menu-item" href="/User">
          {user.username}'s profile
        </a>
      )}
      {user.username && (
        <a className="menu-item" href="#" onClick={(e) => handleLogout(e)}>
          Logout
        </a>
      )}
    </Menu>
  );
};
export default Sidebar;

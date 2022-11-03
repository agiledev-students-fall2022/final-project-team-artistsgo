import "./SearchBar.css";
import { useState } from "react";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
    <div className="search-bar">
        <input 
            type="text" 
            placeholder="Search..." 
            onChange ={event => {
                setSearchTerm(event.target.value)
            }} 
         />
    </div>
    );
}

export default SearchBar;
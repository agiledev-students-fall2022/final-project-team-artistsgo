import "./SearchBar.css";
import search from "./search.png"

function SearchButton() {
    return (
        <div className = "search-button">
            <img src={search}></img>
        </div>
    )
}

//send get request to backend 
function SearchBar() {
    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search..." 
             />
        </div>
        );
}

export default SearchBar;
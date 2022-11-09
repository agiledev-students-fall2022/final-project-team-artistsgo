import "./SearchBar.css";
import search from "./search.png"

//send get request to backend 
function SearchBar() {
    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search for anything..."
                // action = "/searchbar"
             />
        </div>
        );
}

export default SearchBar;
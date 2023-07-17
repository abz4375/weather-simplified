import { useState, useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {
  const [address, setAddress] = useState('')
  
  function onSearch (e) {
    e.preventDefault();
    props.onSubmit(address)
  }

  return (
    <div className="searchbar">
      <form onSubmit={onSearch}>
        <input
          id="searchbar"
          type="text"
          placeholder="Search..."
          value={address}
          onChange={(e)=>{setAddress((e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1))}}
        ></input>
        <SearchIcon  id="searchBtn" onClick ={onSearch}><button type="submit"></button></SearchIcon>
        
      </form>
    </div>
  );
};

export default SearchBar;

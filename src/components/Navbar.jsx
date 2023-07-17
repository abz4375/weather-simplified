import "./Navbar.css";
import SearchBar from "./SearchBar";

const Navbar = (props) => {
  const getData = (data) => {
    props.onSubmit(data)
  }
  return (
    <div className="navbar">
      <SearchBar onSubmit={getData} />
    </div>
  );
};
export default Navbar;

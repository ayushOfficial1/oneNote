import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navContainer">
      <h4>OneNote</h4>
      <div className="navPages">
        <Link to="/">Home</Link>
        <Link to="/login" onClick={()=>Cookies.remove('authtoken')}>Logout</Link>
      </div>
    </div>
  );
};

export default Nav;

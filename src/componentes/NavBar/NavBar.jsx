import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="https://d22fxaf9t8d39k.cloudfront.net/acbeb972f7a241b4eabb3232fabf20a9c0f70a860d0fbdfde0390e9d49c35ffb41804.png" width={80} height={80}></img>
      </Link>
      <Link className="titulonav" to="/">
        AFA Shop
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link" to="/productos/Remeras">Remeras</Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Buzos">Buzos</Link>
        </li>
        <Link className="menu-link" to="/cart"><CartWidget /></Link>
      </ul>
    </nav>
  );
};

export default Navbar;

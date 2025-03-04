import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navspace">
      <h1 className="text-xl font-bold">MyApp</h1>
      <ul className="navlist">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

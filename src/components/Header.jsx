
import "../css/home.css"
import { Link } from "react-router-dom";


const Header = () => {



  return (
    <div className="header">


    <div className="logo">
      <h1><Link to="/home" className="pagelogo">Funrifan</Link></h1>
    </div>

    <nav>
   <ul>
   
      <li><Link to="/" className="links">Home</Link></li>
      <li> <Link to="/office" className="links" >Office</Link></li>
      <li> <Link to="/hotel" className="links">Hotel</Link></li>
      <li> <Link to="/about" className="links">About us</Link></li>
      <li><Link to="/contact" className="links">Contact us</Link></li>
   </ul>
    </nav>

    <div className="button">
      <p className="btn">
        SignUp
      </p>
    </div>
  </div>

  )
};

export default Header;

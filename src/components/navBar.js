import React, {useState} from 'react'
import southfood from '../assets/southfood.png';
import { Link } from 'react-router-dom';
import '../styles/navBar.css';


function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggalebar = () => {
        setOpenLinks(!openLinks);
    };
  return (
    <div className="Navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
             <img src={southfood} alt=""/>
             <h1>OFFical<span>-FOOD</span></h1>
             <div className="hiddenLinks">
             <Link to="/">Home</Link>
             <Link to="/menu">Menu</Link>
             <Link to="/about">About</Link>
             <Link to="/contact">Contact</Link>
             </div>
        </div>
        <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={toggalebar}>
                Click Me
            </button>
        </div>
    </div>
  )
}

export default Navbar;

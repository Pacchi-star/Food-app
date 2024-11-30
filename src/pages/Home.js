import React from 'react'
import {Link} from 'react-router-dom'; 
import '../styles/Home.css';
import biryani from '../assets/biryani.jpg';


function Home() {
  return (
    <div className="home" 
    style={{ backgroundImage: `url(${biryani})` }}
    >
      <div className="headerContainer" >
        <h1>OFFical BIRYANI</h1>
        <p>Biryani is one of the tasty food</p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;

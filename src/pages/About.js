import React from 'react'
import veg from '../assets/veg.jpg';
import '../styles/About.css';


const About = () => {
  return (
    <div className="about">
      <div 
       className="aboutTop"
       style={{ backgroundImage:`url(${veg})` }}> 
       Hi All, </div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Food is one of the basic necessities of life. 
        Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes.
        Nutrients provide the energy our bodies need to function. The energy in food is measured in units called calories.
        FoodData Central Data Types
         The food supply, and the scientific understanding of relationships between dietary intakes and health, have evolved over the years. USDA’s food composition data resources also are evolving to meet the needs of diverse users, including researchers, policy makers, nutrition and health professionals, and product developers.

                <li></li>In recent years, the rapidly escalating pace of change in the food supply and the growing variety of uses for food data have greatly enhanced the need for transparent and easily accessible information about the nutrients and other components in foods and food products. This need requires a new approach to analyzing, compiling, and presenting food profile information in a scientifically rigorous way. FoodData Central continues to embody this new approach.
         FoodData Central contains five distinct types of data that provide information on nutrients and other food components.<li> Although these data types have unique purposes and attributes, they can be used in complementary ways to achieve a variety of research and related objectives. Two of the data types—Foundation Foods and Experimental Foods—provide data that have never previously been available. These data types will be the primary focus of efforts as FoodData Central is expanded and developed in coming years.
          </li>
        </p>
      </div>
      <div className="Rating">
        * * * *

      </div>
    </div>
    
  )
  }

export default About

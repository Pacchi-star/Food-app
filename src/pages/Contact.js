import React from 'react'
import food from '../assets/food.png';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div 
       className="leftSide" 
       style={{ backgroundImage: `url(${food})` }}></div>
      <div className="rightSide">
        <h1>Contact Us</h1>

        <form id="contact-form" method="post">
          <label htmlfor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type=" text" />
          <label htmlfor="email">Email</label>
          <input name="email" placeholder="Enter the email..." type="email"/>
          <label htmlfor="message">Message</label>
          <textarea name="message" row="6" placeholder="Enter the message ..." required />
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

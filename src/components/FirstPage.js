import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/FirstPage.css';

import {Container} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTwitter, faTelegram, faYoutube} from '@fortawesome/free-brands-svg-icons';

function FirstPage() {
  return (
 <div className="footer">
    <div className="socialMedia">
       <p> &copy; 2021 Biryani'sTaste.com</p>
    </div>
    <Container>
      <div className="social-facebook social-media-icon-white">
        <a href='http://facebook.com'>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href='http://instagram.com'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href='http://Twitter.com'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href='http://telegram.com'>
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href='https://www.youtube.com'>
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </Container>
    
</div>
  );
};

export default FirstPage;

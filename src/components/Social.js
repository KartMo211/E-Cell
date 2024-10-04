import React from 'react';
import './social.css'; // Import the CSS file for custom styling

const Social = () => {
  return (
    <div className="container my-4">
      <div className="row justify-content-between align-items-center">
        <div className="col-auto">
          <h3 className="hashtag">#Just_Imagine</h3>
        </div>
        <div className="col-auto d-flex align-items-center justify-content-center justify-content-md-end">
          <a href="#" className="social-icon mx-2">
            <img src="instagram-icon.png" alt="Instagram" className="icon-img" />
          </a>
          <a href="#" className="social-icon mx-2">
            <img src="facebook-icon.png" alt="Facebook" className="icon-img" />
          </a>
          <a href="#" className="social-icon mx-2">
            <img src="linkedin-icon.png" alt="LinkedIn" className="icon-img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;

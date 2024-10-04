import React from 'react';
import './Event.css'; // Import the CSS for custom styling

const Event = () => {
  return (
    <>
    <h2 class="d-flex justify-content-center mt-5 mb-3">Event Gallery</h2>
    <div className="container my-5 hexagon-grid">
      <div className="row justify-content-center align-items-center position-relative">
        {/* Floating circles */}
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>

        {/* Hexagon grid */}
        <div className="col-12 d-flex justify-content-center flex-wrap">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
        <div className="col-12 d-flex justify-content-center flex-wrap">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Event;
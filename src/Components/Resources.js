import React from "react";
import ScrollToTop from './ScrollToTop'

function Resources() {
  return (
    <>
      <ScrollToTop />
      <h1 className="page-title">Get the help you need.</h1>

      <div className="resource-box first-box">
        <h3>Therapist</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="first-btn">Contact</button>
      </div>

      <div className="resource-box second-box">
        <h3>Lawyer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="second-btn">Contact</button>
      </div>
      
      <div className="resource-box third-box">
        <h3>Lawyer</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="third-btn">Contact</button>
      </div>
    </>
  )
}

export default Resources
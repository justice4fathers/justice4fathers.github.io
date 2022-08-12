import React from "react";
import ScrollToTop from './ScrollToTop'

function Donate() {
  return (
    <>
    <ScrollToTop />
    <div className="donate-page">
      <div className="donate-content">
        <h1 className="donate-title">Your contribution counts.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="donate-btn"><button>Donate</button></div>
      </div>
    </div>
    </>
  )
}

export default Donate
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-main">
          <div className="hero-img"><img src={process.env.PUBLIC_URL + '/hero-home.jpg'} alt='hero'/></div>
          
          <div className="home-content">
            <h1 className="home-heading">Justice 4 Fathers</h1>
            <div className="line-break"></div>
            <p className="mission-statement">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            
            <div className="home-offer">
              <div className="icon">
                <Link to='/about'>
                  <img className="home-icons" src={process.env.PUBLIC_URL + '/about-icon.png'} alt='about'/>
                  <p>Who we are.</p>
                </Link>
              </div>

              <div className="icon">
                <Link to='/resources'>
                  <img className="home-icons" src={process.env.PUBLIC_URL + '/resources-icon.png'} alt='about'/>
                  <p>Resources.</p>
                </Link>
              </div>

              <div className="icon">
                <Link to='/donate'>
                  <img className="home-icons" src={process.env.PUBLIC_URL + '/donate-icon.png'} alt='about'/>
                  <p>Make a difference.</p>
                </Link>
              </div>
            </div>
            
            <hr />
            <p className="vo">Veteran Owned & Operated</p>
            <div className="vo-img"><img src={process.env.PUBLIC_URL + '/vo.png'} alt='veteran owned'/></div>
          </div>
        </div>
      </div>

      {/* <div className="footer">contact us</div> */}
    </>
  )
}

export default Home
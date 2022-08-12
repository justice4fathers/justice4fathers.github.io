import React from "react";
import ScrollToTop from './ScrollToTop'

function About() {

  return (
    <>
    <ScrollToTop />
    <div className="white-box">
      <div className="about-content">
        <img className="about-img" src={process.env.PUBLIC_URL + '/about.jpg'} alt='brad brock'/>
        <h1>Brad Brock</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum et sollicitudin ac orci. Laoreet sit amet cursus sit amet dictum sit amet. Molestie a iaculis at erat. Adipiscing enim eu turpis egestas pretium. Morbi tristique senectus et netus et. Ultrices vitae auctor eu augue. Nec dui nunc mattis enim ut tellus.</p>
        <p>Sit amet nulla facilisi morbi. Viverra vitae congue eu consequat. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Est ultricies integer quis auctor. Scelerisque in dictum non consectetur. In fermentum posuere urna nec tincidunt praesent semper. Facilisis gravida neque convallis a cras. Egestas integer eget aliquet nibh.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>

      <div className="about-journey-container">
        <h2>The Journey</h2>
        <div className="line-break-about"></div>
      </div>
    </div>

      <div className="about-journey">
        <p>Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Dignissim enim sit amet venenatis urna cursus. Ornare arcu dui vivamus arcu felis bibendum ut. Cursus eget nunc scelerisque viverra mauris in. Quam id leo in vitae turpis massa sed elementum tempus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Interdum varius sit amet mattis. Scelerisque varius morbi enim nunc faucibus a pellentesque. At quis risus sed vulputate odio ut enim. Tempor orci dapibus ultrices in iaculis nunc sed augue.</p>
        <p>Eget est lorem ipsum dolor sit amet consectetur. Amet dictum sit amet justo donec. Tempor id eu nisl nunc mi ipsum faucibus. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Ultricies lacus sed turpis tincidunt id aliquet. Commodo quis imperdiet massa tincidunt nunc. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Egestas egestas fringilla phasellus faucibus.</p>
        <p>Velit egestas dui id ornare arcu. Viverra accumsan in nisl nisi scelerisque. Mauris rhoncus aenean vel elit scelerisque. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Nibh cras pulvinar mattis nunc sed blandit. Dolor purus non enim praesent elementum facilisis leo vel. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Aliquam eleifend mi in nulla posuere. Faucibus in ornare quam viverra orci sagittis. Enim sed faucibus turpis in eu mi bibendum neque egestas.</p>
      </div>
    </>
  )
}

export default About
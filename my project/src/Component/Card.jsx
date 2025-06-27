import React from "react";
import "./Card.css"


const AcademicsCard = () => {
  return (
    <>
    <div id="main-div">
<div  className="card-wrapper">
  <div  className="card">
    <img id="imgs" src="https://echooling-react.vercel.app/static/media/1.045ce5893b04f4bde993.png" alt="Science" />
      <div className="overlay"></div>
    <div className="card-content">
      <h3>Let’s Talk Science</h3>
      <a href="#">Learn More →</a>
    </div>
  </div>


  <div className="card">
    <img id="imgs" src="https://echooling-react.vercel.app/static/media/2.ec9d013b7d4f44fa4112.png" alt="Science" />
      <div className="overlay"></div>
    <div className="card-content">
      <h3>Let’s Talk Science</h3>
      <a href="#">Learn More →</a>
    </div>
  </div>


  <div className="card">
    <img id="imgs" src="https://echooling-react.vercel.app/static/media/3.0cf44447da5e6fb16e49.png" alt="Science" />
      <div className="overlay"></div>
    <div className="card-content">
      <h3>Let’s Talk Science</h3>
      <a href="#">Learn More →</a>
    </div>
  </div>



  <div className="card">
    <img id="imgs" src="https://echooling-react.vercel.app/static/media/4.3d31b426e478a4d304b8.png" alt="Science" />
      <div className="overlay"></div>
    <div className="card-content">
      <h3>Let’s Talk Science</h3>
      <a href="#">Learn More →</a>
    </div>
  </div>
</div>

    </div>
    </>
  );

};

export default AcademicsCard;


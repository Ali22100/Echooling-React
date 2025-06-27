import React from "react"
import "./Section3.css"


const Section3 =()=>{
    return (
        <>
<div className="hero-section">
  <div className="hero-left">
    <img src="https://echooling-react.vercel.app/static/media/ab.fcda2469b98ffc37a148.png" alt="Students" className="main-img" />
    <img src="https://echooling-react.vercel.app/static/media/badge.ae149076478c64c7b217.png" alt="Badge" className="badge" />
   
  </div>
  <div className="hero-right">
    <h1>
      <span className="blue-text">Welcome to</span><br />
      <span className="red-text">Echooling LMS Platform</span>
    </h1>

    <p>
      Education is both the act of teaching knowledge to others and the act of receiving knowledge from someone else.
    </p>

    <p>
      Have questions? <a href="#" className="cta-link">Get Free Guide</a>
    </p>

    <hr />

    <div className="extra-section">
      <p>
        Education also refers to the knowledge received through schooling instruction<br />
        and to the institution of teaching as a whole. The main purpose of education<br />
        is the integral development of a person.
      </p>

      <div className="action-row">
        <button className="read-more-btn">Read More →</button>

        <div className="support-info">
          <img  src="https://www.freeiconspng.com/uploads/sms-icon-16.png" alt="Chat Icon" />
          <div>
            <p className="support-label">Get Support</p>
            <a href="mailto:support@react.com" className="support-email">support@react.com</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
    )
  
}

export default Section3


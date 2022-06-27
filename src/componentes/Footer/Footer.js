import './Footer.css';
export default function Footer() {
  return (
    <div className='footer' >
<div className="container">
        <div className="row">
            <div className="col-3">
            <h2>Your Logo </h2>
            <p>Your Taggline here</p>
            <h3>About Us  </h3>
            <p>We want to help bring talanted students and unique startups together .</p>
            <h3> Contact Us </h3>
            <h6>Phone:</h6>
            <h6>Email:</h6>
            </div>
            
            <div className="col-3">
            <h2>Information </h2>
            <h4>About Us</h4>
            <h4>More Search </h4>
            <h4>Blog </h4>
            <h4>Testimonials </h4>
            <h4>Events </h4>

            </div>
            <div className="col-3">
            <h2>Helfful Links  </h2>
            <h4>Services </h4>
            <h4>Supports  </h4>
            <h4>Terms & Condition  </h4>
            <h4>Privacy Policy  </h4>
            </div>
            <div className="col-3">
            <h3>Subscribe More Info </h3>
            <input type="text" name="email" placeholder="&#xf0e0; Enter Your Email" style={{fontFamily: "Arial, FontAwesome"}} /><br />
            <button className='btn btn-warning'>Subscribe</button>
            </div>
        </div>
    </div>
    </div>
  )
}

import React from 'react'

function Footer() {
    return (
        <>
            
            <footer id="footer" className="bg-color dark">
  <div className="container">
    {/* Footer Widgets
				============================================= */}
    <div className="footer-widgets-wrap">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-6">
          <a href="#"><img src="demos/yoga/images/logo-dark@2x.png" alt="Logo Footer" height={80} /></a>
          <p className="text-white-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, nesciunt excepturi dolor. Animi, voluptate.</p>
        </div>
        <div className="col-lg-2 col-md-3 col-6">
          <div className="widget clearfix">
            <h3 className="ls0 h5 mb-4">Features</h3>
            <ul className="list-unstyled iconlist ml-0">
              <li className="mb-2"><a href="#" className="text-white-50">All Poses</a></li>
              <li className="mb-2"><a href="#" className="text-white-50">Instructors</a></li>
              <li className="mb-2"><a href="#" className="text-white-50">Gallery</a></li>
              <li className="mb-2"><a href="#" className="text-white-50">Price</a></li>
              <li className="mb-2"><a href="#" className="text-white-50">FAQs</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-6">
          <div className="widget clearfix">
            <h3 className="ls0 h5 mb-4">Connect With Us</h3>
            <ul className="list-unstyled iconlist ml-0">
              <li className="mb-2"><a href="#" className="text-white-50">Facebook</a></li>
              <li className="mb-2"><a href="#" className="text-white-50">Instagram</a></li>
              <li className="mb-2"><a href="#" className="text-white-50">Twitter</a></li>
              <li className="mb-2"><a href="#" className="text-white-50">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-6">
          <div className="widget clearfix">
            <h3 className="ls0 h5 mb-4">Open Hours</h3>
            <ul className="list-unstyled iconlist ml-0">
              <li className="mb-2"><a href="#" className="text-white-50">Monday - Saturday</a></li>
              <li className="mb-2"><a href="#" className="text-white-50">6:30 - 20:00</a></li>
              <li className="mb-2"><a href="#" className="text-white-50">Sunday Closed</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="widget clearfix">
            <h3 className="ls0 h5 mb-4">Studio:</h3>
            <div>
              <address className="font-primary">
                795 Folsom Ave, Suite 600<br />
                San Francisco, CA 94107<br />
              </address>
              <h3 className="mb-3"><a href="tel:+01273123456" className="text-white"><i className="icon-call mr-1 position-relative" style={{fontSize: 22, top: 2}} /> +111 22-33-44</a></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Copyrights
			============================================= */}
  <div id="copyrights" className="center dark">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p className="mb-2 text-white-50">Copyrights © 2014 All Rights Reserved by Canvas Inc.</p>
          <div className="copyright-links text-white-50"><a href="#" className="text-white-50">Terms of Use</a> / <a href="#" className="text-white-50">Privacy Policy</a></div>
        </div>
      </div>
    </div>
  </div>{/* #copyrights end */}
</footer>


        </>
    )
}

export default Footer

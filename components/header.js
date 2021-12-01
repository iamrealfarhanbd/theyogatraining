
const Header = () => {

    return (

      <header id="header" className="border-full-header header-size-custom" data-sticky-shrink="false" data-sticky-offset={52}>
      <div id="header-wrap">
        <div className="container">
          <div className="header-row justify-content-lg-between">
      
            <div id="logo" className="order-lg-2 col-auto px-0 mr-lg-0">
              <a href="#" className="standard-logo" data-dark-logo="demos/yoga/images/logo-dark.png"><img src="demos/yoga/images/logo.png" alt="Canvas Logo" /></a>
              <a href="#" className="retina-logo" data-dark-logo="demos/yoga/images/logo-dark@2x.png"><img src="demos/yoga/images/logo@2x.png" alt="Canvas Logo" /></a>
            </div>
            <div className="header-misc order-lg-3 col-auto col-lg-5 px-0 justify-content-end">
              <a href="demo-yoga-login.html" className="button-link"><div>Login</div></a>
              <a href="https://www.facebook.com/semicolonweb/" target="_blank" className="social-icon si-facebook si-small si-light mb-0"><i className="icon-facebook" /><i className="icon-facebook" /></a>
              <a href="https://www.instagram.com/semicolonweb/" target="_blank" className="social-icon si-instagram si-small si-light mb-0"><i className="icon-instagram" /><i className="icon-instagram" /></a>
              <a href="https://twitter.com/__SemiColon" target="_blank" className="social-icon si-paypal si-small si-light mb-0"><i className="icon-paypal" /><i className="icon-paypal" /></a>
            </div>
            <div id="primary-menu-trigger">
              <svg className="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" /><path d="m 30,50 h 40" /><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" /></svg>
            </div>
        
            <nav className="primary-menu order-lg-1 col-lg-5 px-0">
              
              <ul className="menu-container">
                <li className="current menu-item"><a className="menu-link" href="#"><div>Home</div></a></li>
                <li className="menu-item"><a className="menu-link" href="demo-yoga-about-us.html"><div>About Us</div></a></li>
                <li className="menu-item"><a className="menu-link" href="demo-yoga-pricing.html"><div>Pricing</div></a>
                  <ul className="sub-menu-container">
                    <li className="menu-item"><a className="menu-link" href="#"><div>Dropdown 1</div></a></li>
                    <li className="menu-item"><a className="menu-link" href="#"><div>Dropdown 2</div></a></li>
                    <li className="menu-item"><a className="menu-link" href="#"><div>Dropdown 3</div></a></li>
                  </ul>
                </li>
                <li className="menu-item"><a className="menu-link" href="demo-yoga-contact-us.html"><div>Contact</div></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="header-wrap-clone" />
    </header> 
    )
}

export default Header
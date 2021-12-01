import React from 'react'

function BlogCard() {
    return (
        <>
          <div className="section section-price bg-transparent">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center bottommargin-lg">
            <div className="heading-block border-bottom-0 mb-0" style={{maxWidth: '700px'}}>
              <div className="fancy-title title-border mb-3"><h5 className="font-weight-normal color font-body text-uppercase ls1">Best Price for Everyone</h5></div>
              <h2 className="font-weight-bold mb-2 nott" style={{fontSize: '42px', letterSpacing: '-1px'}}>Your <span>Yoga</span> Plan.</h2>
              <p className="lead mb-0">Energistically syndicate team building synergy after efficient human capital. Assertively underwhelm sticky solutions.</p>
            </div>
            <img src="demos/yoga/images/yoga-img.svg" alt="Yoga Image" className="d-none d-sm-flex" width={300} />
          </div>
          <div className="row">
            <div className="col-md-4 mb-5">
              <h2 className="font-weight-normal">
                1 Free Class.<br />
                Free Diet Plan.<br />
                All Classes.<br />
                24x7 Available.
              </h2>
              <p className="text-black-50">Sign up and Get your free 1 Day Trial Class.</p>
              <a href="#" className="btn rounded bg-color text-white shadow text-uppercase font-weight-semibold ls1 py-3 px-4">Start Class Today</a>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card pricing border-0 shadow text-center">
                <div className="card-body rounded pt-5 pb-0">
                  <img src="demos/yoga/images/yoga-icons/color/svg/mudra_surya.svg" className="mb-3" alt="" height={40} />
                  <h3>Monthly Subscription</h3>
                  <ul className="list-unstyled">
                    <li className="text-black-50 my-1">New Classes Included</li>
                    <li className="text-black-50 my-1">Any Studio Accessable</li>
                    <li className="text-black-50 my-1">cancel Any Time</li>
                  </ul>
                  <h3 className="mb-3 h2 color">$19.99</h3>
                  <a href="#" className="btn rounded bg-color text-white text-uppercase font-weight-semibold ls1 py-2 px-4">Get Started</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card pricing border-0 shadow text-center">
                <div className="card-body rounded pt-5 pb-0">
                  <img src="demos/yoga/images/yoga-icons/color/svg/mudra_anjali.svg" className="mb-3" alt="" height={40} />
                  <h3>Annual Subscription</h3>
                  <ul className="list-unstyled">
                    <li className="text-black-50 my-1">1 Month Free</li>
                    <li className="text-black-50 my-1">New Classes Included</li>
                    <li className="text-black-50 my-1">Any Studio Accessable</li>
                    <li className="text-black-50 my-1">Free Towel and Juices</li>
                    <li className="text-black-50 my-1">24x7 Accesable</li>
                    <li className="text-black-50 my-1">cancel Any Time</li>
                  </ul>
                  <h3 className="mb-3 h2">$219.99</h3>
                  <a href="#" className="btn rounded bg-dark text-white text-uppercase font-weight-semibold ls1 py-2 px-4">Get Started</a>
                </div>
              </div>
            </div>
          </div>
          <div className="clear bottommargin" />
          <div className="center text-title"><h3><img src="demos/yoga/images/yoga-icons/outlined/svg/sahasara.svg" alt="" width={20} height={20} />Additional Features For Annual Subscriber</h3></div>
          <div className="price-features">
            <div className="row">
              <div className="col-md-4">
                <ul className="iconlist mb-0">
                  <li><i className="icon-line-circle-check color" /> 24x7 Available</li>
                  <li><i className="icon-line-circle-check color" /> Free Lunch Per Day</li>
                  <li><i className="icon-line-circle-check color" /> All Classes in One Price</li>
                  <li><i className="icon-line-circle-check color" /> Special Event Access</li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="iconlist mb-0">
                  <li><i className="icon-line-circle-check color" /> Free Towel Provide</li>
                  <li><i className="icon-line-circle-check color" /> Free Lockers</li>
                  <li><i className="icon-line-circle-check color" /> Free Lockers</li>
                  <li><i className="icon-line-circle-check color" /> Free Yoga Mat*</li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="iconlist mb-0">
                  <li><i className="icon-line-circle-check color" /> 1 Month Free</li>
                  <li><i className="icon-line-circle-check color" /> Any Studio Accessable</li>
                  <li><i className="icon-line-circle-check color" /> Cancel Anytime</li>
                  <li><i className="icon-line-circle-check color" /> No Hidden Charges</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default BlogCard

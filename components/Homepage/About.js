import React from 'react'

function About() {
    return (
        <>
<div className="position-relative">
        <div className="container">
            <div className="row py-0 py-lg-5">
            <div className="col-lg-5 py-5">
                <div className="heading-block border-bottom-0 bottommargin-sm">
                <div className="fancy-title title-border mb-3"><h5 className="font-weight-normal color font-body">About Us</h5></div>
                <h3 className="font-weight-bold nott" style={{fontSize: 42, letterSpacing: '-1px'}}>What is <span>Canvas</span> Yoga?</h3>
                </div>
                <p className="mb-5">Monotonectally pursue intuitive catalysts for change for extensible materials intrinsicly fabricate.</p>
                <div className="feature-box fbox-plain bottommargin-sm">
                <div className="fbox-icon">
                    <i className="icon-line-circle-check text-primary" />
                </div>
                <div className="fbox-content">
                    <h3 className="font-weight-normal nott">Classes Every Week.</h3>
                    <p>Canvas provides support for Native HTML5 Videos that can be added to a Full Width Background.</p>
                </div>
                </div>
                <div className="feature-box fbox-plain bottommargin-sm">
                <div className="fbox-icon">
                    <i className="icon-line-circle-check text-warning" />
                </div>
                <div className="fbox-content">
                    <h3 className="font-weight-normal nott">10+ Years Experienced.</h3>
                    <p>Canvas provides support for Native HTML5 Videos that can be added to a Full Width Background.</p>
                </div>
                </div>
                <div className="feature-box fbox-plain">
                <div className="fbox-icon">
                    <i className="icon-line-circle-check text-info" />
                </div>
                <div className="fbox-content">
                    <h3 className="font-weight-normal nott">2100+ Members Active.</h3>
                    <p>Canvas provides support for Native HTML5 Videos that can be added to a Full Width Background.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="section-img" style={{background: 'radial-gradient(ellipse at center, rgba(255,221,148,.7),rgba(255,221,148,1)), url("demos/yoga/images/yoga-about.jpg") no-repeat center center / cover'}}>
            <img className="section-img-sm" src="demos/yoga/images/yoga-about-sm.jpg" alt="Section Img" />
        </div>
</div>
 
        </>
    )
}

export default About

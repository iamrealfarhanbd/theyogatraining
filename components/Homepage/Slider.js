
import Swiper from 'react-id-swiper';
function Slider() {


    return (
        <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
<section id="slider" className="slider-element swiper_wrapper min-vh-100" data-effect="fade">
  <div className="slider-inner">
    <div className="swiper-container swiper-parent">
      <div className="swiper-wrapper">
        <swiperslide>
          <div className="swiper-slide hero-diagonal dark bg-color" style={{background: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0, 0.1)), url("demos/yoga/images/slider/hero-1.jpg") no-repeat center right / auto 100%'}}>
            <div className="container" style={{zIndex: 2}}>
              <div className="row h-100 align-items-center py-5">
                <div className="col-md-6">
                  <div className="heading-block border-bottom-0 bottommargin-sm">
                    <h5 className="text-uppercase ls4 font-weight-light mb-2 text-white-50" >Yoga &amp; Meditation</h5>
                    <h2 className="font-weight-bold nott ls0" >Yoga is the perfect opportunity to be curious about who you are.</h2>
                  </div>
                  <p className="mb-5 font-weight-normal lead" >Monotonectally pursue intuitive catalysts for change for extensible materials. Intrinsicly fabricate principle-centered web-readiness with virtual.</p>
                  <a href="#" data-scrollto="#section-about"  className="btn rounded bg-white color text-uppercase font-weight-semibold ls1 py-3 px-4">Get Started <i className="icon-line-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </swiperslide>
        <swiperslide>	
            <div className="swiper-slide hero-diagonal dark bg-color" style={{background: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0, 0.1)), url("demos/yoga/images/slider/hero-2.jpg") no-repeat bottom right / auto 100%'}}>
            <div className="container" style={{zIndex: 2}}>
              <div className="row h-100 align-items-center py-5">
                <div className="col-md-6">
                  <div className="heading-block border-bottom-0 bottommargin-sm">
                    <h5 className="text-uppercase ls4 font-weight-light mb-2 text-white-50" >Yoga &amp; Meditation</h5>
                    <h2 className="font-weight-bold nott ls0" >Yoga is the perfect opportunity to be curious about who you are.</h2>
                  </div>
                  <p className="mb-5 font-weight-normal lead" >Monotonectally pursue intuitive catalysts for change for extensible materials. Intrinsicly fabricate principle-centered web-readiness with virtual.</p>
                  <a href="#" data-scrollto="#section-about"  className="btn rounded bg-white color text-uppercase font-weight-semibold ls1 py-3 px-4">Get Started <i className="icon-line-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </swiperslide>
        </div>
      <div className="slider-arrow-left"><i className="icon-angle-left" /></div>
      <div className="slider-arrow-right"><i className="icon-angle-right" /></div>
      <div className="slide-number"><div className="slide-number-current" /><span>/</span><div className="slide-number-total" /></div>
    </div>
  </div>
</section>

    </Swiper>
    )
}

export default Slider

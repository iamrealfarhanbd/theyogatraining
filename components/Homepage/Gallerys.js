import Gallery from './Gallery'



function Gallerys() {

    const gallerys = [
        {
          'id': '1',
          'img': "demos/yoga/images/gallery/1.jpg",
          'link':"demos/yoga/images/gallery/1.jpg"
        },
        {
            'id': '2',
            'img': "demos/yoga/images/gallery/2.jpg",
            'link':"demos/yoga/images/gallery/2.jpg"
          },
          {
            'id': '3',
            'img': "demos/yoga/images/gallery/3.jpg",
            'link':"demos/yoga/images/gallery/3.jpg"
          },
          {
            'id': '4',
            'img': "demos/yoga/images/gallery/4.jpg",
            'link':"demos/yoga/images/gallery/4.jpg"
          },
          {
            'id': '5',
            'img': "demos/yoga/images/gallery/5.jpg",
            'link':"demos/yoga/images/gallery/5.jpg"
          },
          {
            'id': '6',
            'img': "demos/yoga/images/gallery/6.jpg",
            'link':"demos/yoga/images/gallery/6.jpg"
          },
          {
            'id': '7',
            'img': "demos/yoga/images/gallery/7.jpg",
            'link':"demos/yoga/images/gallery/7.jpg"
          },
          {
            'id': '8',
            'img': "demos/yoga/images/gallery/8.jpg",
            'link':"demos/yoga/images/gallery/8.jpg"
          },
          {
            'id': '9',
            'img': "demos/yoga/images/gallery/9.jpg",
            'link':"demos/yoga/images/gallery/9.jpg"
          },
          {
            'id': '10',
            'img': "demos/yoga/images/gallery/10.jpg",
            'link':"demos/yoga/images/gallery/10.jpg"
          },
          {
            'id': '11',
            'img': "demos/yoga/images/gallery/11.jpg",
            'link':"demos/yoga/images/gallery/11.jpg"
          },
          {
            'id': '12',
            'img': "demos/yoga/images/gallery/12.jpg",
            'link':"demos/yoga/images/gallery/12.jpg"
          },
    
      ]
    return (
        <>

<div>
  <div className="section bg-transparent border-top mb-0">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="heading-block border-bottom-0 mb-0" style={{maxWidth: 700}}>
          <div className="fancy-title title-border mb-3"><h5 className="font-weight-normal color font-body text-uppercase ls1">Beautiful Captured</h5></div>
          <h2 className="font-weight-bold mb-2 nott" style={{fontSize: 42, letterSpacing: '-1px'}}>Our <span>Yoga</span> Gallery.</h2>
          <p className="lead mb-0">Energistically syndicate team building synergy after efficient human capital. Assertively underwhelm sticky solutions.</p>
        </div>
        <img src="demos/yoga/images/yoga-2.svg" alt="Yoga Image" className="d-none d-sm-flex" width={300} />
      </div>
    </div>
  </div>
  <div className="section p-0 m-0">
    <div className="masonry-thumbs grid-container grid-2 grid-sm-3 grid-md-4" data-lightbox="gallery">
      
      {
          gallerys.map((gallery) => {
            return <Gallery gallery={gallery} key={gallery.id} />
          })
        }
    </div>
  </div>

</div>


        </>
    )
}

export default Gallerys

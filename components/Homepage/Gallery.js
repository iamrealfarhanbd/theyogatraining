
function Gallery({gallery}) {
    return (
        <>
          <a className="grid-item" href={gallery.link} data-lightbox="gallery-item"><img src={gallery.img} alt="Gallery Thumb 1" /></a>  
        </>
    )
}

export default Gallery

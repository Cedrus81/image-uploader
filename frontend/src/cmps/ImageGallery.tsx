import { Image } from "../types"
import ImagePreview from "./ImagePreview"

type GalleryProps = {
  images:Image[]
}

function ImageGallery(props:GalleryProps) {
  const {images} = props
  return (
    <section className="image-gallery">
      {images?.length && images.map(image => <ImagePreview key={image._id}  image={image} />)}
        {/* <div className="demo-preview">IMG</div>
        <div className="demo-preview">IMG</div>
        <div className="demo-preview">IMG</div>
        <div className="demo-preview">IMG</div>
        <div className="demo-preview">IMG</div>
        <div className="demo-preview">IMG</div>
        <div className="demo-preview">IMG</div>
        <div className="demo-preview">IMG</div>
        <div className="demo-preview">IMG</div>
        <div className="demo-preview">IMG</div>
        <div className="demo-preview">IMG</div>
        <div className="demo-preview">IMG</div>
        <div className="demo-preview">IMG</div>
        <div className="demo-preview">IMG</div> */}
    </section>
  )
}

export default ImageGallery
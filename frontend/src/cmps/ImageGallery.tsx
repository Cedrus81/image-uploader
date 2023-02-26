import { Image } from "../types"
import ImagePreview from "./ImagePreview"

type GalleryProps = {
  images:Image[]
  removeImage: Function
}

function ImageGallery(props:GalleryProps) {
  const {images, removeImage} = props
  return (
    <section className="image-gallery" >
      {images?.length && images.map(image => <ImagePreview key={image._id}  image={image} removeImage={removeImage} />)}
    </section>
  )
}

export default ImageGallery
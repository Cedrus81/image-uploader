import { Link } from "react-router-dom"
import { Image } from "../types"
import { ImCross } from "react-icons/im";
import { MouseEvent } from "react";
type PreviewProps ={
  image: Image
  removeImage: Function
}

function ImagePreview(props: PreviewProps) {
  const {url, _id} = props.image
  function onRemoveImage(e: MouseEvent){
    e.preventDefault()
    props.removeImage(_id)
  }
  return (
    <Link to={`/img/${_id}`}>
      <div className="image-preview" style={{backgroundImage: `url(${url})`}}>
        <section className="image-preview-options">
          <button className="remove-image" onClick={onRemoveImage} title='Delete this image'><ImCross/></button>
        </section>
      </div>
    </Link>
  )
}

export default ImagePreview
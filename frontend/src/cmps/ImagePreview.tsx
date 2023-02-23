import { Link } from "react-router-dom"
import { Image } from "../types"

type PreviewProps ={
  image: Image
}

function ImagePreview(props: PreviewProps) {
  const {url, _id} = props.image
  return (
    <Link to={`/img/${_id}`}>
      <div className="image-preview" style={{backgroundImage: `url(${url})`}}></div>
    </Link>
  )
}

export default ImagePreview
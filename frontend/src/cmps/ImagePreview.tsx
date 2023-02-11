import { Image } from "../types"

type PreviewProps ={
  image: Image
}

function ImagePreview(props: PreviewProps) {
  const {url, _id} = props.image
  return (
    <div className="image-preview" style={{backgroundImage: `url(${url})`}}></div>
  )
}

export default ImagePreview
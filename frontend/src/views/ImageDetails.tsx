import {BsCheckLg} from 'react-icons/bs'
import { utilService } from '../services/utils.service'
// import { useEffect, useRef } from 'react'
import { useAppSelector } from '../hooks'
import { Link, useParams } from 'react-router-dom'
function ImageDetails() {
  const {id} = useParams()
  const image = useAppSelector((state)=> state.image.library.find(img=> img._id === id))
  if(!image){
    return(
      <main className="upload-card success-page">
          <h2>Loading your image...</h2>
      </main>
    )
  }
  const isNew = Date.now() - image.addedAt <= 5000
  return (
    <main className="upload-card success-page">
        {isNew && <>
            <div className="success-icon"><BsCheckLg /></div>
            <h2>Uploaded Successfully!</h2>
        </>}
            <section className='image-preview' style={{backgroundImage: `url(${image.url})`}}></section>
            <div className="url-display">
                <input type="text" value={utilService.truncateString(image.url, 53)} readOnly />
                <button className="copy-link" onClick={() => {navigator.clipboard.writeText(image.url)}}>Copy Link</button>
            </div>
            <Link to='/'><button>Home</button></Link>
    </main>
  )
}

export default ImageDetails
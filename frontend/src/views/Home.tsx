import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImageGallery from '../cmps/ImageGallery'
import { useAppSelector, useAppDispatch } from '../hooks'

function Home() {
  let images =useAppSelector((state) => state.image.library)
  
  function removeImage(id:string){
    console.log('removing image, id:', id)
  }
  return (
   <main className='home-container upload-card'>
      <h1>Welcome back!</h1>
      <h3>Your gallery is waiting:</h3>
      <Link to='/upload'><button>Upload new</button></Link>
      {images.length ? 
      <ImageGallery images={images} removeImage={removeImage} />
      :
      <h3>Loading images... 
        If this is taking a while, this gallery might be empty
      </h3>
      }
   </main>
  )
}

export default Home
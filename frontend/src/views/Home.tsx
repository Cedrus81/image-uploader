import { useEffect } from 'react'
import ImageGallery from '../cmps/ImageGallery'
import { useAppSelector, useAppDispatch } from '../hooks'

function Home() {
  let images =useAppSelector((state) => state.image.library)
  return (
   <main className='home-container upload-card'>
      <h1>Welcome back!</h1>
      <h3>Your gallery is waiting:</h3>
      <button>Upload new</button>
      <ImageGallery images={images} />
   </main>
  )
}

export default Home
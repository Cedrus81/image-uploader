import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ImageGallery from '../cmps/ImageGallery'
import { useAppSelector, useAppDispatch } from '../hooks'

function Home() {
  let images =useAppSelector((state) => state.image.library)
  return (
   <main className='home-container upload-card'>
      <h1>Welcome back!</h1>
      <h3>Your gallery is waiting:</h3>
      <Link to='/upload'><button>Upload new</button></Link>
      <ImageGallery images={images} />
   </main>
  )
}

export default Home
// import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ImageGallery from '../cmps/ImageGallery'
// import Popup from '../cmps/Popup'
import { useAppSelector, useAppDispatch } from '../hooks'
import { removeImage } from '../store/slices/imageSlice'
function Home() {
  const dispatch = useAppDispatch()
  let images =useAppSelector((state) => state.image.library)
  // const [isPopup, setIsPopup] = useState(false)
  // const [msg, setMsg] = useState('')
  
  function removeImageWarning(id:string){
    dispatch(removeImage(id))
    // console.log('removing image, id:', id)
    // setMsg(() => 'Are you sure you would like to delete this Image? Press \'Confirm\' to approve.')
    // setIsPopup(()=>true)
  }

  return (
   <main className='home-container upload-card'>
      <h1>Welcome back!</h1>
      <h3>Your gallery is waiting:</h3>
      <Link to='/upload' className={images.length > 12 ? 'inactive' : ''} title={images.length > 12 ? 'The gallery is limited up to 12 at any given time' : ''}><button>Upload new</button></Link>
      {images.length ? 
      <ImageGallery images={images} removeImage={removeImageWarning} />
      :
      <h3>Loading images... 
        If this is taking a while, the gallery might be empty
      </h3>
      }
      {/* {isPopup && <Popup msg={msg} removeImageApproved={removeImageAproved} />} */}
   </main>
  )
}

export default Home
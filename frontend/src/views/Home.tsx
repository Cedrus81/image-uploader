import { useEffect } from 'react'
import ImageGallery from '../cmps/ImageGallery'
import { useAppSelector, useAppDispatch } from '../hooks'
import { RootState } from '../store'
import { addZeitim, removeZeitim } from '../store/slices/pizzaSlice'

function Home() {
  const tosafot = useAppSelector((state: RootState) => state.pizza.tosafot)
  const dispatch = useAppDispatch()
  useEffect(()=>console.log(tosafot)
  ,[tosafot])
  
  return (
   <main className='home-container upload-card'>
      <h1>Welcome back!</h1>
      <h3>Your gallery is waiting:</h3>
      <button>Upload new</button>
      <ImageGallery />
   </main>
  )
}

export default Home
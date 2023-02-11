import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
import { RootState } from '../store'
import { addZeitim, removeZeitim } from '../store/slices/pizzaSlice'

function Home() {
  const tosafot = useAppSelector((state: RootState) => state.pizza.tosafot)
  const dispatch = useAppDispatch()
  useEffect(()=>console.log(tosafot)
  ,[tosafot])
  
  return (
   <>
   <button onClick={() => dispatch(addZeitim())}>add zeitim</button>
   <button onClick={() => dispatch(removeZeitim())}>remove zeitim</button>
    <h1>{...tosafot}</h1>
   </>
  )
}

export default Home
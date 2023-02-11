import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import { utilService } from '../../services/utils.service'
import { Image } from '../../types'
import { imageService } from '../../services/image.service'
// Define a type for the slice state
// library is a string on URLs
interface imageState {
  library: Image[]
}

const initialState: imageState = {
    library: [
        { _id: utilService.makeId(), url: 'https://picsum.photos/300/200' },
        { _id: utilService.makeId(), url: 'https://picsum.photos/300/201' },
        { _id: utilService.makeId(), url: 'https://picsum.photos/300/202' },
        { _id: utilService.makeId(), url: 'https://picsum.photos/300/203' },
        { _id: utilService.makeId(), url: 'https://picsum.photos/300/204' },
        { _id: utilService.makeId(), url: 'https://picsum.photos/301/200' },
        { _id: utilService.makeId(), url: 'https://picsum.photos/301/201' },
        { _id: utilService.makeId(), url: 'https://picsum.photos/301/202' },
        { _id: utilService.makeId(), url: 'https://picsum.photos/301/203' },
        { _id: utilService.makeId(), url: 'https://picsum.photos/301/204' },
        { _id: utilService.makeId(), url: 'https://picsum.photos/302/200' },
        { _id: utilService.makeId(), url: 'https://picsum.photos/302/201' },
        { _id: utilService.makeId(), url: 'https://picsum.photos/302/202' },
        { _id: utilService.makeId(), url: 'https://picsum.photos/302/203' },
    ],
}
  
  export const imageSlice = createSlice({
    name: 'image',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
    //   addZeitim: (state) => {
    //     state.tosafot.push('zeitim')
    //   },
    //   removeZeitim: (state) => {
    //     state.tosafot.pop()
    //   },
      // Use the PayloadAction type to declare the contents of `action.payload`
      // incrementByAmount: (state, action: PayloadAction<number>) => {
      //   state.value += action.payload
      // },
    },
  })
  
//   export const { addZeitim, removeZeitim } = pizzaSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const getImages = (state: RootState) => state.image.library
  
  export default imageSlice.reducer
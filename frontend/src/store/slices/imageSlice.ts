import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
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

export const addViaUrl = createAsyncThunk('validateUrl', async(url:string , { rejectWithValue}) =>{
  try{
      await imageService.validateURL(url)
  } catch (err){
    return rejectWithValue(err)
  }
  return url
})
  
export const imageSlice = createSlice({
    name: 'image',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder.addCase(addViaUrl.fulfilled, (state,action) => {
        state.library.unshift(imageService.makeImage(action.payload))
      })

      builder.addCase(addViaUrl.rejected, (state, action) => {
        console.log(action.payload)
      })
    },
  })
  
  // export const { addViaUrl } = imageSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const getImages = (state: RootState) => state.image.library
  
  export default imageSlice.reducer
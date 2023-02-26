import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'
// import { utilService } from '../../services/utils.service'
import { Image } from '../../types'
import { imageService } from '../../services/image.service'
// Define a type for the slice state
// library is a string on URLs
interface imageState {
  library: Image[]
  selectedImage: Image | null
}

const initialState: imageState = {
    library: [],
    selectedImage: null
  }

export const addImage = createAsyncThunk('validateUrl', async(url:string , { rejectWithValue}) =>{
  try{
      await imageService.validateURL(url)
      const newImage = await imageService.addImage(url)
      return newImage
  } catch (err){
    return rejectWithValue(err)
  }
})

export const removeImage = createAsyncThunk('removeImage', async(id:string) =>{
  try{
    await imageService.removeImage(id)
    return id
  }catch(e){
    console.log('Error, could not delete image:', e)
  }
})


export const loadImages = createAsyncThunk('loadImages', async() =>{
  try{
    const images = await imageService.getImages()
    return images
  }catch(e){
    console.log('error - could not load images')
  }
})
  
export const imageSlice = createSlice({
    name: 'image',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder.addCase(addImage.fulfilled, (state,{payload}) => {
        state.library.unshift(payload.ops[0])
      })

      builder.addCase(addImage.rejected, (state, action) => {
        console.log(action.payload)
      })

      builder.addCase(removeImage.fulfilled, (state, {payload}) => {

      })

      builder.addCase(loadImages.fulfilled, (state,{payload}) => {
        state.library = payload
      })

    },
  })
  
  export const { } = imageSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const getImages = (state: RootState) => state.image.library
  
  export default imageSlice.reducer
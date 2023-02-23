import {  createBrowserRouter,  RouterProvider} from "react-router-dom"
import Home from "./views/Home";
import UploadPage from "./views/UploadPage";
import { loadImages } from "./store/slices/imageSlice";
import { useAppDispatch } from "./hooks";
import { useEffect } from "react";
import ImageDetails from "./views/ImageDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/upload',
    element: <UploadPage />
  },
  {
  path:'/img/:id',
  element: <ImageDetails />
  }
]);


function App() {
  const dispatch = useAppDispatch()
  useEffect(() =>{
    dispatch(loadImages())
  },[])
  return (
    <RouterProvider router={router}/>
  )
}

export default App

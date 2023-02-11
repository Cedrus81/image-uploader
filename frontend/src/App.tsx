import { useEffect } from "react";
import {  createBrowserRouter,  RouterProvider} from "react-router-dom"
import { useAppDispatch, useAppSelector } from "./hooks";
import { getImages } from "./store/slices/imageSlice";
import Home from "./views/Home";
import UploadPage from "./views/UploadPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/upload',
    element: <UploadPage />
  }
]);


function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App

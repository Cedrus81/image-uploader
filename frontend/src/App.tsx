import {  createBrowserRouter,  RouterProvider} from "react-router-dom"
import Home from "./views/Home";
import UploadPage from "./views/UploadPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <UploadPage />,
  },
]);


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App

import { ChangeEvent, useRef, useState, DragEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../hooks";
import { uploadService } from "../services/upload.service";
import { addImage } from "../store/slices/imageSlice";
function UploadPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const urlInput = useRef<HTMLInputElement>(null)
  const fileInput = useRef<HTMLInputElement>(null)
  // const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isDragover, setIsDragOver] = useState(false)
  async function onUploadViaURL(){
    if(urlInput.current) {
      saveImage(urlInput.current.value)
    }
  }
  async function onUploadViaFile(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.files){
      onFile(e.target.files)
      }
  }

  
  function handleDragEnter(e: DragEvent<HTMLElement>){
    e.preventDefault()
    setIsDragOver(()=> true)
  }

  function handleDragLeave(e: DragEvent<HTMLElement>){
    e.preventDefault()
    e.stopPropagation()
    setIsDragOver(()=> false)
  }
  
   function handleDrop(e: DragEvent<HTMLElement>){
    handleDragLeave(e)
    onFile(e.dataTransfer.files)
  }
  
  async function onFile(file: FileList){
    setIsLoading(()=> true)
    const res = await uploadService.uploadImg(file)
    saveImage(res.secure_url)
  }

  async function saveImage(url:string) {
    setIsLoading(()=> true) // only false in case it was added via url
    const newImage = await dispatch(addImage(url))
    navigate(`/img/${newImage.payload.insertedId}`)
  }
  if (isLoading){
    return(
      <main className="upload-card progress-card">
        <h2>Uploading...</h2>
        <div className="progress-bar">
          <div className="progress-thumb"></div>
        </div>
      </main>
    )
  }
  return (
    <main className='upload-card align-center'>
      <h2>Upload your image</h2>
      <p>File should be Jpeg, Png,...</p>
      <section className={`dnd-area ${isDragover ? 'dragging' : ''}`}
      // onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragEnter}
      onDrop={handleDrop}
      >
        {isDragover ?
          <p>Drop your image here!</p>
        : 
          <>
            <img src="./dnd.svg" alt="drag image here" draggable='false' />
            <p>Drag & Drop your image here</p>
          </>
          }
      </section>
      <p>OR</p>
      <button onClick={()=>fileInput.current?.click()}>Choose a file</button>
      <input type="file" accept="image/*" className="inputFile" onChange={(e)=>onUploadViaFile(e)} ref={fileInput} hidden />
      <p>Save image via URL:</p>
      <div className="input-box">
        <label className="floating-label" htmlFor="inputUrl">URL</label>
        <input id="inputUrl" type="text" ref={urlInput} required />
        <button onClick={onUploadViaURL}>Submit</button>
      </div>
      <Link to='/'><button>Home</button></Link>
        {/* {isError && <p className="error-text">some sites do not allow upload due to CORS</p>} */}
    </main>
  )
}

export default UploadPage
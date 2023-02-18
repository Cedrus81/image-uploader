import { ChangeEvent, useRef, useState, DragEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks";
import { uploadService } from "../services/upload.service";
import { addViaUrl } from "../store/slices/imageSlice";
function UploadPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const urlInput = useRef<HTMLInputElement>(null)
  const fileInput = useRef<HTMLInputElement>(null)
  const [isError, setIsError] = useState(false)
  async function onUploadViaURL(){
    if(urlInput.current) {
      let res = await dispatch(addViaUrl(urlInput.current.value))
      if(res.meta.requestStatus === 'rejected'){
        setIsError(()=>true)
        setTimeout(() => {
          setIsError(()=> false)
        }, 2000);
      }
      else navigate('/')
    }
  }
  async function onUploadViaFile(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.files){
      const res = await uploadService.uploadImg(e.target.files)
      await dispatch(addViaUrl(res.secure_url))
      }
      navigate('/')
  }

  function handleDragOver(e: DragEvent<HTMLElement>){
    e.preventDefault()
    // console.log('handledragover:',e)
  }

  async function handleDrop(e: DragEvent<HTMLElement>){
    e.preventDefault()
    console.log('handledrop:',e.dataTransfer.files)
    const res = await uploadService.uploadImg(e.dataTransfer.files)

    await dispatch(addViaUrl(res.secure_url))

    navigate('/')


  }
  
  
  return (
    <main className='upload-card align-center'>
      <h2>Upload your image</h2>
      <p>File should be Jpeg, Png,...</p>
      <section className='dnd-area'
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      >
          <img src="./dnd.svg" alt="drag image here" />
          <p>Drag & Drop your image here</p>
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
        {isError && <p className="error-text">some sites do not allow upload due to CORS</p>}
    </main>
  )
}

export default UploadPage
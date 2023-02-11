import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { imageService } from "../services/image.service";
function UploadPage() {
  // const [url, setUrl] = useState('')
  const urlInput = useRef<HTMLInputElement>(null);
  
  async function onUploadViaURL(){
    if(urlInput.current) {
      const res = await imageService.validateURL(urlInput.current.value)
      console.log(res)
    }
  }
  return (
    <main className='upload-card align-center'>
      <h2>Upload your image</h2>
      <p>File should be Jpeg, Png,...</p>
      <section className='dnd-area'>
        <img src="./dnd.svg" alt="drag image here" />
        <p>Drag & Drop your image here</p>
      </section>
      <p>OR</p>
      <button>Choose a file</button>
      <p>Save image via URL:</p>
      <div className="input-box">
        <label className="floating-label" htmlFor="inputUrl">URL</label>
        <input id="inputUrl" type="text" ref={urlInput} required />
        <button onClick={onUploadViaURL}>Submit</button>
      </div>
      <Link to='/'><button>Home</button></Link>

    </main>
  )
}

export default UploadPage
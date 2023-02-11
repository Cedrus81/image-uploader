function UploadPage() {
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
    </main>
  )
}

export default UploadPage
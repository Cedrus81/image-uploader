import { ChangeEvent } from "react"

export const uploadService = {
  uploadImg
}
function uploadImg(e: ChangeEvent<HTMLInputElement>) {
  if(!e.target.files) return
  const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME
  const UPLOAD_PRESET = import.meta.env.VITE_CLOUD_PRESET
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`

  const formData = new FormData()
  formData.append('upload_preset', UPLOAD_PRESET)
  formData.append('file', e.target.files[0])

  return fetch(UPLOAD_URL, {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(res => {
      return res
    })
    .catch(err => console.error(err))
}

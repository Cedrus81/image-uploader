import axios from "axios"

export const imageService = {
    validateURL
}

async function validateURL(url:string):Promise<boolean>{
    const res = await axios
    .get(url)
    .then(() =>  true)
    .catch(() => false)
    return res
}
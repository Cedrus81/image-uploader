import axios from "axios"
import { utilService } from "./utils.service"
import { httpService } from "./http.service"
export const imageService = {
    validateURL,
    makeImage,
    getImages
}

async function getImages(){
    return httpService.get('image', null)
}

function makeImage(url:string){
    return {
        _id:utilService.makeId(),
        url
    }
}

async function validateURL(url:string):Promise<boolean>{
    try{
        await axios.get(url)
        return true
    } catch(e){
        throw new Error('Could not add image: Invalid url')
    }
}
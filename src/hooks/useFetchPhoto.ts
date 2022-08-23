import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { IPhoto } from '../models'

const useFetchPhoto = () => {
    let { photoId } = useParams()
    const [photo, setPhoto] = useState<IPhoto>({} as IPhoto)

    const fetchPhoto = async () => {
        const response = await axios.get<IPhoto[]>(`https://jsonplaceholder.typicode.com/photos?id=${photoId}`)
        setPhoto(response.data[0])
    }

    useEffect(() => {
        fetchPhoto()
    }, [photoId])

    return { photo }
}

export default useFetchPhoto
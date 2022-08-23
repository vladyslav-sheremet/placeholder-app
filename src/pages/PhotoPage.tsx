import { Container } from '@mui/material'

import useFetchPhoto from '../hooks/useFetchPhoto'

import Photo from '../components/Photo'

const PhotoPage = () => {
    const { photo } = useFetchPhoto()

    return (
        <Container sx={{ mt: '1rem' }}>
            <Photo data={photo} />
        </Container>
    )
}

export default PhotoPage
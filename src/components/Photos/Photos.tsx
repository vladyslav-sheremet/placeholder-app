import { useState } from 'react'
import { Grid, Container } from '@mui/material'

import Error from '../Error'
import Loader from '../Loader'
import Photo from '../Photo'
import Search from '../Search'

import { PhotosProps } from '.'

const Photos = ({ data, error, loading }: PhotosProps) => {
    const [search, setSearch] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const dataFiltered = data.filter(item => item.title.includes(search))

    return (
        <Container sx={{ my: '5rem' }}>
            <Search changeHandler={changeHandler} />
            {error && <Error error={error} />}
            <Grid container spacing={2} justifyContent="space-between">
                {dataFiltered.map(item => <Photo key={item.id} data={item} />)}
            </Grid>
            {loading && <Loader />}
        </Container>
    )
}

export default Photos
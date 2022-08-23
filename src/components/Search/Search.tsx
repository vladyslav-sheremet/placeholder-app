import { TextField, Box } from '@mui/material'

import { SearchProps } from '.'

const Search = ({ changeHandler }: SearchProps) => (
    <Box textAlign='center'>
        <TextField
            sx={{
                marginBottom: '30px'
            }}
            id="outlined-basic"
            label="Search..."
            variant="outlined"
            onChange={changeHandler}
        />
    </Box>
)

export default Search
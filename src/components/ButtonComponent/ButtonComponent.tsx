import { Button, Box } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'

import { ButtonComponentProps } from '.'

const ButtonComponent = ({ showMoreHandler }: ButtonComponentProps) => (
    <Box textAlign='center'>
        <Button
            sx={{ marginBottom: '30px' }}
            variant="contained"
            onClick={showMoreHandler}
            size="large"
            endIcon={<RefreshIcon />}
        >
            Show more
        </Button>
    </Box>
)


export default ButtonComponent
import { Alert } from '@mui/material'

import { ErrorProps } from '.'

const Error = ({error}: ErrorProps) => <Alert sx={{justifyContent: 'center'}} severity="error">{error}</Alert>

export default Error
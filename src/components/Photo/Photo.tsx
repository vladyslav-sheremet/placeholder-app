import { Card, Grid, CardMedia, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { PhotoProps } from '.'

const Photo = ({ data }: PhotoProps) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link to={`${data.id}`}>
        <Card sx={{ height: '100%' }}>
          <CardMedia
            component="img"
            height="186"
            image={data.url}
            alt={data.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid >
  )
}

export default Photo
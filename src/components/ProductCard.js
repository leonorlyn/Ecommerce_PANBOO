import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

export function ProductCard({ image, title, color, pattern, size, price }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Color: {color}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Pattern: {pattern}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Size: {size}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Typography variant="h6" color="primary">
            ${price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

import React from 'react';
import { Card, Typography } from '@mui/material';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { CardContent } from '@mui/material';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function Product(props) {
  const { product, onAdd } = props;
 
  const navigate=useNavigate();
  const handleClick = (id)=>
  {
    navigate(`/product/${id}`)
  }
  
  return (
    <Card sx={{ maxWidth: 1400, maxHeight: 1000}} className="margin">
      <CardActionArea>
        <img className='product' src={product.image} alt={product.name} onClick={()=>{handleClick(product.id)}}  ></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='bgblue margin'>
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            $ {product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={() => onAdd(product)}>Add To Cart</Button>
    </Stack>
      </CardActions>
    </Card>
    
 
  );
}

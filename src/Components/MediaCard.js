import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { red } from '@mui/material/colors';
import Divider from '@mui/material/Divider';



export default function MediaCard(props) {
  const { src, title, model, price, desc } = props;

  return (
    <div>
      <Card mt={5} sx={{border: '1px solid lightGrey'}}>
        <CardMedia
          sx={{ height: 300 }}
          component="img"
          image={src}
          alt="iPhone"
          // width='100'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center' color='red' sx={{fontWeight:'bold'}}>
            {`${title}: ${model}`}
          </Typography>
          <Typography variant="body3">
            {desc}
          </Typography>
          <Typography variant="body1" mt={2} sx={{fontSize:'22px', fontWeight: 'bold', textAlign:'center'}}>
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" variant="contained" color='warning' sx={{width:1, fontWeight:'bold', fontSize:'20px',}}>
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
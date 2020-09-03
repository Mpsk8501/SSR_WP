import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Product = (productData) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();
  const product = productData.props

  return (
      <Card key={product.id} className={classes.root}>
        <CardActionArea>
          <CardMedia
              className={classes.media}
              image={product.images[0].src}
              title="Product"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography
                variant="body2" color="textSecondary" component="div">
              <div dangerouslySetInnerHTML={{__html:product.short_description}}/>
            </Typography>
            <Typography gutterBottom variant="h6" component="h4">
              Обычная цена: {product.regular_price}
            </Typography>
            <Typography gutterBottom variant="h6" component="h4">
              Цена: {product.price}
            </Typography>
            {
              product.attributes.length
                  ? product.attributes.map((item,index)=>{
                    return(
                        <Typography key={index} gutterBottom variant="h6" component="h4">
                          {item.name}: {item.options[0]}
                        </Typography>
                    )
                  })
                  : null
            }
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Посмотреть
          </Button>
        </CardActions>
      </Card>
  )
}

export default Product
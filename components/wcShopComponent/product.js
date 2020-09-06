import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import classes from './Shop.module.scss'
import Link from 'next/link'

const Product = (productData) => {

  const product = productData.props

  return (
      <Card key={product.productId} className={classes.root}>
        <CardActionArea>
          <Link  href={`/wcShop/product?id=${product.productId}`}>
            <a>
          <CardMedia
              className={classes.media}
              image={product.image.sourceUrl}
              title="Product"
          />
            </a>
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography
                variant="body2" color="textSecondary" component="div">
              <div dangerouslySetInnerHTML={{__html:product.shortDescription}}/>
            </Typography>
            <Typography gutterBottom variant="h6" component="h4">
              Обычная цена: {product.regularPrice}
            </Typography>
            <Typography gutterBottom variant="h6" component="h4">
              Цена: {product.price}
            </Typography>
            {
              product.localAttributes.nodes
                  ? product.localAttributes.nodes.map((item,index)=>{
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
            В корзину
          </Button>
        </CardActions>
      </Card>
  )
}

export default Product
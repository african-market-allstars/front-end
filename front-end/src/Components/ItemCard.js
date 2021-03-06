import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ThemeConsumer } from 'styled-components';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 600,
    color: '#1EBA4D'
    
  },
  media: {
    height: 140,
  },
  button: {
    backgroundColor: '#1EBA4D',
    color: 'white'
  }
});



const ItemCard = ({item , editItem , deleteItem}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.image_url}
          title={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {item.name} | {item.price}Franc
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" className={classes.button} onClick={() => editItem(item)}>
            Edit
        </Button>
        <Button variant="contained" size="small" color="secondary" onClick={() => deleteItem(item)}>
            Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default ItemCard
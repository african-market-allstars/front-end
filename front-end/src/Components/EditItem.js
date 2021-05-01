import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const EditItem = ({itemToEdit , setItemToEdit , currentEdit , setEditing}) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: '#f3f3f3',
            width:'35%',
            borderRadius: '25px',
            margin: 'auto',
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            
          },
       
        },
        card: {
            display: 'flex',
            flexWrap:'wrap',
            width:'90%',
            marginLeft:'5%',
            justifyContent:'space-around',
            alignItems: 'center'
        },
        button: {
            backgroundColor: '#1EBA4D',
            color: 'white'
          }
      }));
      const classes = useStyles();
return(
    <form className={classes.root} onSubmit={currentEdit}>
        <TextField
                    id="standard-basic"
                    label="Item Name"
                    name = 'name'
                    type = 'text'
                    value = {itemToEdit.name}
                    onChange = {(e) => setItemToEdit({...itemToEdit , name: e.target.value})}

                />
                <TextField
                    id="standard-basic"
                    label = "Category"
                    name = 'category'
                    type = 'text'
                    value = {itemToEdit.category}
                    onChange = {(e) => setItemToEdit({...itemToEdit , category: e.target.value})}


                />
                <TextField
                    id="standard-basic"
                    label = "Price"
                    name = 'price'
                    type = 'text'
                    value = {itemToEdit.price }
                    onChange = {(e) => setItemToEdit({...itemToEdit , price: e.target.value})}


                />
                <TextField
                    id="standard-basic"
                    label = "Description"
                    name = 'description'
                    value = {itemToEdit.description}
                    onChange = {(e) => setItemToEdit({...itemToEdit , description: e.target.value})}
                    multiline


                />
                <Button className={classes.button} variant="contained" type="submit">Submit</Button>
                <Button color="secondary" variant="contained" onClick={() => setEditing(false)}>Cancel</Button>

    </form>
)

}

export default EditItem
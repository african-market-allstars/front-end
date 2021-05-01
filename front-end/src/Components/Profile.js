// import axios from 'axios'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { axiosWithAuth } from '../Utilities/axiosWithAuth';
import EditItem from './EditItem'
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ItemCard from './ItemCard'

const Profile = () => {
    // INITIAL FORM DATA
    const initialForm = {
        name: '',
        category: '',
        price: '',
        description: ''
      };
// STATE
    const [itemList , setItemList] = useState([])
    const [item , setItem] = useState(initialForm)
    const [editing , setEditing] = useState(false)
    const [itemToEdit , setItemToEdit] = useState(initialForm)

    // GET ALL ITEMS
    useEffect( () => {
        axios.get('https://african-market-allstars.herokuapp.com/api/items')
        .then(res => {
            console.log(res)
            setItemList(res.data)
        })
        .catch(err => console.log(err))
    },[] )
// INPUT CHANGE HANDLER
  const onChange = (e) => {
      const {name , value} = e.target
    setItem({
      ...item,
      [name]: value,
    });
  };

   
// POST NEW ITEM
    const postItem = item => {
        // axiosWithAuth().post(`https://african-market-allstars.herokuapp.com/api/users/${params.id}/items`, item)
        axiosWithAuth().post("https://reqres.in/api/order", item)
        .then(res => {
            console.log(res)
            setItemList([...itemList , res.data])
        })
        .catch( err => console.log('error', err))
    }
// HANDLE SUBMIT
    const onSubmit = (e) => {
        e.preventDefault()
        postItem(item)
        setItem(initialForm)
    
      };

    // EDIT ITEMS
    const editItem = item => {
        setEditing(true)
        setItemToEdit(item)
    }


    const currentEdit = e => {
        e.preventDefault()
        // axiosWithAuth().put(`https://african-market-allstars.herokuapp.com/api/users${params.id}/items/${itemToEdit.id}`, itemToEdit)
        axiosWithAuth().put(`https://reqres.in/api/users/${itemToEdit.id}`, itemToEdit)
        .then( res => {
            console.log(res)
            setEditing(false)
            const modifiedItem = res.data
            setItemList( itemList.map( item => {
                if(item.id === modifiedItem.id){
                    return modifiedItem
                }
                return item
            } ) )
        })
        .catch(err => console.log(err))
    }
    // DELETE ITEM
    const deleteItem = item => {
        axiosWithAuth().delete(`https://reqres.in/api/users/${item.id}`, item)
        .then( res => {
            console.log( res)
            const updateList = itemList.filter( item => item.id !== Number(res.data) )
            setItemList(updateList)
        })
        .catch( err => console.log(err))
    }

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
      const params = useParams();
      console.log(params)
    return (
        <div>
            <section className='intro'>
                <h1>Welcome Back {params.id} !</h1>
                <h3>Thanks for being a beautiful human</h3>
                <h5>Let's post a new item to the market</h5>
            </section>

            
            { editing && <EditItem
            itemToEdit = {itemToEdit}
            setItemToEdit={setItemToEdit}
            currentEdit ={currentEdit}
            setEditing={setEditing} /> }

            {!editing && 
            
            <form className={classes.root} onSubmit = {onSubmit}>
                <TextField
                    id="standard-basic"
                    label="Item Name"
                    name = 'name'
                    type = 'text'
                    value = {item.itemName}
                    onChange = {onChange}

                />
                <TextField
                    id="standard-basic"
                    label = "Category"
                    name = 'category'
                    type = 'text'
                    value = {item.category}
                    onChange = {onChange}


                />
                <TextField
                    id="standard-basic"
                    label = "Price"
                    name = 'price'
                    type = 'text'
                    value = {item.price }
                    onChange = {onChange}


                />
                <TextField
                    id="standard-basic"
                    label = "Description"
                    name = 'description'
                    value = {item.description}
                    onChange = {onChange}
                    multiline


                />
                <Button className={classes.button} variant="contained">Submit</Button>
            </form>
        }
            <section className={classes.card}>
             {itemList.map( item =>  (
               <ItemCard  item={item} editItem={editItem} deleteItem={deleteItem} />
            ) )}   
            </section>
            



        </div>


    )
}

export default Profile
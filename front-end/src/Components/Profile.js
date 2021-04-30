// import axios from 'axios'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { axiosWithAuth } from '../Utilities/axiosWithAuth';
import EditItem from './EditItem'
const Profile = () => {
    const params = useParams();
    const initialForm = {
        name: '',
        category: '',
        price: '',
        description: ''
      };

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
        axiosWithAuth().put(`https://reqres.in/api/users/${item.id}`, item)
        .then( res => {
            console.log( res)
            const updateList = itemList.filter( item => item.id !== Number(res.data) )
            setItemList(updateList)
        })
        .catch( err => console.log(err))
    }
    return (
        <div>
            <section className='intro'>
                <h1>Welcome Back {params.id} !</h1>
                <h3>Thanks for being a beautiful human</h3>
                <h5>Let's post a new item to the market</h5>
            </section>
            <form onSubmit = {onSubmit}>
                <label htmlFor='itemName'>Item Name</label>
                <input
                    name = 'name'
                    type = 'text'
                    value = {item.itemName}
                    onChange = {onChange}

                />
                <label htmlFor='category'>Category</label>
                <input
                    name = 'category'
                    type = 'text'
                    value = {item.category}
                    onChange = {onChange}

                />
                <label htmlFor='price'>Price</label>
                <input
                    name = 'price'
                    type = 'text'
                    value = {item.price }
                    onChange = {onChange}

                />
                <label htmlFor='description'>Description</label>
                <textarea
                    name = 'description'
                    value = {item.description}
                    onChange = {onChange}
                    

                />
                <button>Submit</button>
            </form>
            {itemList.map( item =>  (
                <div>
                    <p>{item.itemName}</p>
                    <img width="20%" src={item.image_url} alt={item.description}></img>
                    <p>{item.subcategory}</p>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                    <button onClick={() => editItem(item)}>Edit</button>
                    <button onClick={() => deleteItem(item)}>Delete</button>
                </div>
            ) )}

            { editing && <EditItem
            itemToEdit = {itemToEdit}
            setItemToEdit={setItemToEdit}
            currentEdit ={currentEdit}
            setEditing={setEditing} /> }

        </div>
    

    )
}

export default Profile
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Profile = () => {

    const initialForm = {
        itemName: '',
        subcategory: '',
        price: '',
        description: ''
      };

    const [itemList , setItemList] = useState([])
    const [item , setItem] = useState(initialForm)



  const onChange = (e) => {
      const {name , value} = e.target
    setItem({
      ...item,
      [name]: value,
    });
  };

    useEffect( () => {
        axios.get('https://african-market-allstars.herokuapp.com/api/users')
        .then( res => console.log(res))
        .catch(err => console.log(err))
    },[] )

    const postItem = item => {
        axios.post(`https://african-market-allstars.herokuapp.com/api/users/items`, item)
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

    return (
        <div>
            <section className='intro'>
                <h1>Welcome Back !</h1>
                <h3>Thanks for being a beautiful human</h3>
                <h5>Let's post a new item to the market</h5>
            </section>
            <form onSubmit = {onSubmit}>
                <label htmlFor='itemName'>Item Name</label>
                <input
                    name = 'itemName'
                    type = 'text'
                    value = {item.itemName}
                    onChange = {onChange}

                />
                <label htmlFor='subcategory'>SubCategory</label>
                <input
                    name = 'subcategory'
                    type = 'text'
                    value = {item.subcategory}
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
            


        </div>
    

    )
}

export default Profile
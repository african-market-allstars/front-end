import React from 'react'

const EditItem = ({itemToEdit , setItemToEdit , currentEdit , setEditing}) => {
return(
    <form onSubmit={currentEdit}>
         <label htmlFor='itemName'>Item Name</label>
                <input
                    name = 'name'
                    type = 'text'
                    onChange = {(e) => setItemToEdit({...itemToEdit , name: e.target.value})}
                    value = {itemToEdit.name}

                />
                <label htmlFor='category'>Category</label>
                <input
                    name = 'category'
                    type = 'text'
                    onChange = {(e) => setItemToEdit({...itemToEdit , category: e.target.value})}
                    value = {itemToEdit.category}

                />
                <label htmlFor='price'>Price</label>
                <input
                    name = 'price'
                    type = 'text'
                    onChange = {(e) => setItemToEdit({...itemToEdit , price: e.target.value})}
                    value = {itemToEdit.price}

                />
                <label htmlFor='description'>Description</label>
                <textarea
                    name = 'description'
                    onChange = {(e) => setItemToEdit({...itemToEdit , description: e.target.value})}
                    value = {itemToEdit.description}
                    

                />
                <button type="submit">Submit</button>
                <button onClick={() => setEditing(false)}>Cancel</button>
    </form>
)

}

export default EditItem
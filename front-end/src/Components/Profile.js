import React from 'react'

const Profile = () => {
    // useEffect( () =>{
    //     axios
    // },[] )

    return (
        <div>
            <section className='intro'>
                <h1>Welcome Back!</h1>
                <h5>Let's post a new item to the market</h5>
            </section>
            <form>
                <label htmlFor='itemName'>Item Name</label>
                <input
                    name='itemName'
                    type='text'

                />
                <label htmlFor='price'>Price</label>
                <input
                    name='price'
                    type='number'

                />
                <label htmlFor='description'>Description</label>
                <textarea
                    name='description'


                />
                <button>Submit</button>
            </form>

        </div>


    )
}

export default Profile
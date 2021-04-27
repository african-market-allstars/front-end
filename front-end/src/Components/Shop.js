import React ,{useEffect, useState} from "react"
import {Link, Route, useHistory} from "react-router-dom"
import data from "./data"
import Item from "./Item"


function Shop () {
    const[products, setProducts] = useState([])
    const {push, goBack} = useHistory();

    useEffect( ()=>{
        setProducts(data)
    },[] )

    return (
        <div className="Shop">
            {/* <nav>
                <h1>African Market Place </h1>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/profile">Profile</Link>
                </div>
            </nav> */}
            <div>
                {products.map( item => {
                    return <Item shopItem = {item} />
                })}
            </div>
           
            {/* <div className="items-list-wrapper">
                {products.map((item) => (
                    <Link to={`/shop/${item.id}`}>
                        <div className= "item-card" key={item.id}>
                            <img className="item-list-image" src={item.imageUrl} alt={item.commodityproduct}/>
                            <p>{item.SubCategory}</p>
                            <p>${item.commodityproduct}</p>
                        </div>
                    </Link>
                ))}
                    <Route path="/shop/:id">
                        <Item items= {products} />
                    </Route>
            </div> */}
        </div>
    )
}
export default Shop;

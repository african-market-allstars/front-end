import React ,{useState} from "react"
import {Link, Route, Switch, useHistory} from "react-router-dom"
import data from "./data"
import Home from "./Home"
import Item from "./Item"
import Profile from "./Profile"

function Shop () {
    const[products, setProducts] = useState(data)
    const {push, goBack} = useHistory();

    return (
        <div className="Shop">
            <nav>
                <h1>African Market Place </h1>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/profile">Profile</Link>
                </div>
            </nav>

            <div className="items-list-wrapper">
                {products.map((item) => (
                    <Link to={`/shop/${item.id}`}>
                        <div className= "item-card" key={item.id}>
                            <img className="item-list-image" src={item.imageUrl} alt={item.commodityproduct}/>
                            <p>{item.SubCategory}</p>
                            <p>${item.commodityproduct}</p>
                        </div>
                    </Link>
                ))}

                <Switch>
                    <Route path="/shop/:id">
                        <Item items= {products} />
                    </Route>

                    <Route path="/profile" component={Profile}/>
                    <Route path="/shop" component={Shop} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </div>
    )
}
export default Shop;

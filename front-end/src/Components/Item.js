import React from "react";
import {
  Route,
  Link,
  NavLink,
  useParams,
  useRouteMatch,
  useRouteMatch
} from "react-router-dom";

function Item(props){

    const param=useParams();
    const routeMatch= useRouteMatch();

    const shopItem= props.items.find(
        (item) => item.id === Number(params.id)
    )

    return (
        <div className="item-wrapper">
            <div className="item-header">
                <div className="image-wrapper">
                    <img src={shopItem.imageUrl} alt={shopItem.commodityproduct} />
                </div>
                
                <div className="item-title-wrapper">
                    <h2>{shopItem.commodityproduct}</h2>
                    <h4>{shopItem.SubCategory}</h4>
                </div>
            </div>

    </div>
    );
}
export default Item;
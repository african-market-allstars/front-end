import React from "react";
import {
  Route,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";
import ItemDescription from "./ItemDescription";
import ItemShipping from "./ItemShipping";

function Item({shopItem}) {
  const params = useParams();
  const routeMatch = useRouteMatch();
console.log(shopItem)
  // const shopItem = props.items.find((item) => item.id === Number(params.id));

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

      <nav className="item-sub-nav">
        <NavLink exact to={routeMatch.url}>
          Description
        </NavLink>
        <NavLink to={`${routeMatch.url}/shipping`}>Shipping info</NavLink>
      </nav>

      <Route exact path={routeMatch.path}>
        <ItemDescription item={shopItem} />
      </Route>

      <Route path={`${routeMatch.path}/shipping`}>
        <ItemShipping item={shopItem} />
      </Route>
    </div>
  );
}
export default Item;
import React from "react";

function ItemDescription(props) {
  return (
    <div>
      <p className="item-description">{props.item.commodityproduct}</p>
    </div>
  );
}

export default ItemDescription;
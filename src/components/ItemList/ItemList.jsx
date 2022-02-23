import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

export default function ItemList(props) {
  let items = props.foundedItems.results;
  return (
    <div className="container-fluid">
      <div className="row">
        {items
          ? items.map((element) => (
              <div className=" item-list col-4">
                <Item key={element.id} item={element} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

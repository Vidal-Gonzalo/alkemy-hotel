import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import NoItems from "../NoItems/NoItems";

export default function ItemList(props) {
  let items = props.items;

  return (
    <div className="container-fluid">
      <div className="row">
        {items ? (
          items.map((element) => (
            <div key={element.id} className="item-list col-12 col-md-4">
              <Item item={element} />
            </div>
          ))
        ) : (
          <NoItems />
        )}
      </div>
    </div>
  );
}

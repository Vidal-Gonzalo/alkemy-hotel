import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

export default function ItemList(props) {
  let items = props.foundedItems.results;
  return (
    <div className="container-fluid">
      <div className="row">
        {items ? (
          items.map((element) => (
            <div key={element.id} className="item-list col-4">
              <Item item={element} />
            </div>
          ))
        ) : (
          <div className="no-item">
            <h5>¡No hay items en tu lista!</h5>
          </div>
        )}
      </div>
    </div>
  );
}

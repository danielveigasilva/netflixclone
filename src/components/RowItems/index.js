import React from "react";
import "./index.css";
import ItemDefault from "../ItemDefault";
import ItemOriginals from "../ItemOriginals";
import ItemTop10 from "../ItemTop10";

export default ({ title, tag, itens }) => {
  return (
    <div className="rowItem--listArea">
      <h2>{title}</h2>
      {itens.results.length > 0 &&
        itens.results.map((item, key) => (
          <ItemDefault item={item}></ItemDefault>
        ))}
    </div>
  );
};

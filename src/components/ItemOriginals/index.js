import React from "react";
import "./index.css";

export default ({ item }) => {
  return (
    <div className="rowItem--listArea">
      ItemOriginals
      <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
    </div>
  );
};

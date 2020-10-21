import React, { useEffect, useState } from "react";
import { version } from "react-dom";
import Tmdb from "./Tmdb";
import RowItems from "./components/RowItems";

export default () => {
  const [itensList, setItensList] = useState([]);

  useEffect(() => {
    const loadItens = async () => {
      setItensList(await Tmdb.getHomeList("Daniel", "movie"));
    };
    loadItens();
  }, []);

  return (
    <div className="page">
      <section classNam="lists">
        {itensList.map((item, key) => (
          <RowItems
            key={key}
            title={item.title}
            tag={item.tag}
            itens={item.itens}
          ></RowItems>
        ))}
      </section>
    </div>
  );
};

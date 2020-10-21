const API_KEY = "cac6ab6f60f330b8d0834c0f76df7a83";
const BASE_URL = "https://api.themoviedb.org/3";
const Language = "pt-BR";

const basicFetch = async (route, parameters) => {
  let request = await fetch(
    `${BASE_URL}${route}?api_key=${API_KEY}&language=${Language}&${parameters}`
  );
  return await request.json();
};

export default {
  getHomeList: async (userName, typeData) => {
    return [
      {
        tag: "my_list",
        title: "Minha Lista",
        itens: await basicFetch(
          `/discover/${typeData}`,
          "sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        ),
      },
      {
        tag: "continue_watch",
        title: `Continue assistindo como ${userName}`,
        itens: await basicFetch(
          `/discover/${typeData}`,
          "sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        ),
      },
      {
        tag: "top_10",
        title: "Top 10 de hoje no Brasil",
        itens: await basicFetch(
          `/discover/${typeData}`,
          "sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        ),
      },
      {
        tag: "popular",
        title: "Em alta",
        itens: await basicFetch(
          `/discover/${typeData}`,
          "sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        ),
      },
      {
        tag: "original_netflix",
        title: "Originais Netflix",
        itens: await basicFetch(
          `/discover/${typeData}`,
          "sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        ),
      },
      {
        tag: "watch_again",
        title: "Assistir Novamente",
        itens: await basicFetch(
          `/discover/${typeData}`,
          "sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        ),
      },
      {
        tag: "releases",
        title: "Lançamentos",
        itens: await basicFetch(
          `/discover/${typeData}`,
          "sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        ),
      },
      {
        tag: "action",
        title: "Ação",
        itens: await basicFetch(
          `/discover/${typeData}`,
          "sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        ),
      },
      {
        tag: "comedy",
        title: "Comédia",
        itens: await basicFetch(
          `/discover/${typeData}`,
          "sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        ),
      },
    ];
  },
};

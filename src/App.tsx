import React, { useContext, Fragment, useEffect } from "react";
import "./App.css";
import { Store } from "./Store";
import { IEpisode, IAction } from "./interfaces";

function App(): JSX.Element {
  const { state, dispatch } = useContext(Store);
  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const fetchDataAction = async () => {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };
  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode,
    };
    if (episodeInFav) {
      const favWithoutEpisode = state.favourites.filter(
        (fav: IEpisode) => fav.id !== episode.id
      );
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode,
      };
    }
    return dispatch(dispatchObj);
  };
  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  console.log(state);

  return (
    <Fragment>
      <header className="header">
        <div>
          <h1>Rick & Morty</h1>
          <p>Pick your favourite epoisode!!!</p>
        </div>
        <div>
          <p>Favourites: {`${state.favourites.length}`}</p>
        </div>
      </header>
      <section className="episode-layout">
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id} className="episode-box">
              <img
                src={episode.image.medium}
                alt={`Rick & Morty ${episode.name}`}
              />
              <div>{episode.name}</div>
              <section>
                <div>
                  Season: {episode.season} Number: {episode.number}
                </div>
                <button type="button" onClick={() => toggleFavAction(episode)}>
                  {state.favourites.find(
                    (fav: IEpisode) => fav.id === episode.id
                  )
                    ? "UnFav"
                    : "Fav"}
                </button>
              </section>
            </section>
          );
        })}
      </section>
    </Fragment>
  );
}

export default App;

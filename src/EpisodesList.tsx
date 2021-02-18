import React from "react";
import { IEpisode } from "./interfaces";
import "./App.css";

export default function EpisodesList(props: any): JSX.Element {
    const { toggleFavAction, episodes, favourites, store } = props;
    const { state, dispatch } = store;
    return (
        <div className="episode-layout">
            {episodes.map((episode: IEpisode) => {
                return (
                    <section key={episode.id} className="episode-box">
                        <img
                            src={episode.image.medium}
                            alt={`Rick & Morty ${episode.name}`}
                        />
                        <div>{episode.name}</div>
                        <section
                            style={{ display: "flex", justifyContent: "space-between" }}
                        >
                            <div>
                                Season: {episode.season} Number: {episode.number}
                            </div>
                            <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
                                {favourites.find((fav: IEpisode) => fav.id === episode.id)
                                    ? "UnFav"
                                    : "Fav"}
                            </button>
                        </section>
                    </section>
                );
            })}
        </div>
    );
}

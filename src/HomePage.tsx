import React, { useContext, useEffect, lazy } from "react";
import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import { fetchDataAction, toggleFavAction } from './Actions';

const EpisodesList = lazy(() => import("./EpisodesList"));

function HomePage(): JSX.Element {
    const { state, dispatch } = useContext(Store);

    useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch);
    });

    const props: IEpisodeProps = {
        episodes: state.episodes,
        store: { state, dispatch },
        favourites: state.favourites,
        toggleFavAction,
    };

    return (
        <>
            <React.Suspense fallback={<div>Loading...</div>}>
                <section>
                    <EpisodesList {...props} />
                </section>
            </React.Suspense>
        </>
    );
}

export default HomePage;

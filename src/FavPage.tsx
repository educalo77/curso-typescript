import React, { useContext, lazy } from 'react';
import { Store } from "./Store";
import { toggleFavAction } from './Actions';
import { IEpisodeProps } from "./interfaces";

const EpisodesList = lazy(() => import("./EpisodesList"));

export default function FavPage(): JSX.Element {

    const { state, dispatch } = useContext(Store);

    const props: IEpisodeProps = {
        episodes: state.favourites,
        store: { state, dispatch },
        favourites: state.favourites,
        toggleFavAction,
    };
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <div className="episode-layout">
                <EpisodesList {...props} />
            </div>
        </React.Suspense>
    )
}

export type Dispatch = React.Dispatch<IAction>;

export interface IEpisode {
    airdate: string,
    airstamp: string,
    airtime: string,
    id: number,
    image: { medium: string, original: string }
    name: string,
    number: number,
    runtime: number,
    season: number,
    summary: string,
    type: string,
    url: string
}

export interface IState {
    episodes: Array<IEpisode>;
    favourites: Array<IEpisode> | any;
}
export interface IAction {
    type: string;
    payload: Array<IEpisode>;
}

export interface IEpisodeProps {
    episodes: Array<IEpisode>;
    store: { state: IState, dispatch: Dispatch };
    favourites: Array<IEpisode>;
    toggleFavAction: (state: IState, dispatch: Dispatch, episode: IEpisode) => IAction
}
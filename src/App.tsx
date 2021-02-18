import React, { useContext, Fragment } from "react";
import "./App.css";
import { Store } from "./Store";
import { Link } from "@reach/router";

function App(props: any): JSX.Element {
  const { state } = useContext(Store);

  return (
    <Fragment>
      <header className="header">
        <div>
          <h1>Rick & Morty</h1>
          <p>Pick your favourite epoisode!!!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">
            <p>Favourites: {`${state.favourites.length}`}</p>
          </Link>
        </div>
      </header>
      {props.children}
    </Fragment>
  );
}

export default App;

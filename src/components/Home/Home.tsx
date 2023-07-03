import React, { useContext } from "react";
import { Context } from "../../context";
import Match from "./Matches/Match";
import q from "../Home/Home.module.css";

const Home = () => {
  const { ...context } = useContext(Context);

  return (
    <div className={q.imageContainer}>
      {context.leftMatches >= 1 ? (
        <Match
          style="onematchContainre"
          IsOnFire={context.IsoneOnFire}
          matchNumber={1}
          SetIsOnFire={context.SetIsoneOnFire}
        />
      ) : null}
      {context.leftMatches >= 2 ? (
        <Match
          style={"twomatchesContainre"}
          IsOnFire={context.IstwoOnFire}
          matchNumber={2}
          SetIsOnFire={context.SetIstwoOnFire}
        />
      ) : null}
      {context.leftMatches >= 3 ? (
        <Match
          style={"threematchesContainre"}
          IsOnFire={context.IsthreeOnFire}
          matchNumber={3}
          SetIsOnFire={context.SetIsthreeOnFire}
        />
      ) : null}
    </div>
  );
};

export default Home;

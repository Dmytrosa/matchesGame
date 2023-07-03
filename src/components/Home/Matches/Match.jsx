import React, { useContext } from "react";
import match from "../../../source/Match.png"
import firematch from "../../../source/FireMatch.png"
import q from "../Home.module.css"
import { Context } from "../../../context";

const Match = ({ style, IsOnFire, matchNumber, SetIsOnFire }) => {
  const { ...context } = useContext(Context)

  function createMatches(n) {

    const matches = [];
    for (let i = 0; i < n; i++) {
      matches.push(<img key={i}
        className={q.image}
        src={IsOnFire ? firematch : match} alt="match" />);
    }
    return matches;
  }

  return (
    <div className={`${q[style]}`}
      onClick={() => {
        context.setLeftMatches(context.leftMatches - matchNumber);
        context.setscore(
          { ...context.score, playerscore: context.score.playerscore + matchNumber })
        context.setcurrentBet(
          { ...context.currentBet, playersCurrent: context.playersCurrent = matchNumber })
        if (context.leftMatches > 0){context.setBotTern(true);}
          
      }}
      onMouseEnter={() => (SetIsOnFire(true))}
      onMouseLeave={() => { SetIsOnFire(false) }}>
      {createMatches(matchNumber)}
    </div>
  )
}
export default Match;
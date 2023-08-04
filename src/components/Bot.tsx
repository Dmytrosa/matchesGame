import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context";
import { FC } from "react";

type Props={

}

const Bot : FC = ({}:Props) =>  {
  const { ...context }: any = useContext(Context);
  const player = context.currentBet.playersCurrent;
  const bot = context.currentBet.botsCurrent;
  const [winner, setWinner]= useState("you win")
  const EvnotEv = (number: number): boolean => {
    if (number % 2 === 0) return true;
    return false;
  };

  const botChoise = () => {
    context.setIsFirstRender(false);
    const left = context.leftMatches;

    if (!context.isFirstRender && context.leftMatches > 0) {
      if (left <= 3 && left > 0) {
        if (EvnotEv(bot)) {
          if (left === 1) {
            SetBotChoise(1);
            return;
          } else if (left === 2) {
            SetBotChoise(2);
            return;
          } else if (left === 3) {
            SetBotChoise(2);
            return;
          }
        } else if (!EvnotEv(bot)) {
          if (left === 1) {
            SetBotChoise(1);
            return;
          } else if (left === 2) {
            SetBotChoise(1);
            return;
          } else if (left === 3) {
            SetBotChoise(3);
            return;
          }
        }
      }

      console.log("-------------");
      console.log("player:" + player);
      console.log("left:" + left);

      if (EvnotEv(bot)) {
        if (EvnotEv(left)) {
          SetBotChoise(3); // п п
          return 0;
        } else SetBotChoise(3); // н п
        return 0;
      } else if (EvnotEv(left)) {
        SetBotChoise(2); // п н
        return 0;
      } else SetBotChoise(2); // н н
    }
    return 0;
  };

  const SetBotChoise = (choise: number) => {
    context.setscore({ ...context.score, botscore: context.score.botscore + choise });
    context.setLeftMatches(context.leftMatches - choise);
    context.setcurrentBet({ ...context.currentBet, botsCurrent: (context.botsCurrent = choise) });
  };

  useEffect(() => {
    botChoise();
  }, [context.botTern]);

  useEffect(() => {
    checkWinner();
  }, [context.score]);

  const checkWinner = () => {
    if (context.score.playerscore + context.score.botscore >= 25 ) {
      context.setIsOver(true);
      if (EvnotEv(context.score.botscore)) {
        setWinner("bot win");
      }
    }
  };

  return (
    <div>
      {context.isOver ? (
        <>{winner}</>
      ) : (
        <>
          <div>
            <article>player score: {context.score.playerscore}</article>
            <article>bot score: {context.score.botscore}</article>
          </div>
          <label>Left matches: {context.leftMatches}</label>
          {context.score.playerscore ? (
            <>
              <p>
                you selected: {!context.botTern ? <>{player}</> : <></>}
              </p>
              <p>
                bot selected: {bot} {context.setBotTern(false)}
              </p>
            </>
          ) : null}
        </>
      )} 
    </div>
  );
};

export default Bot;
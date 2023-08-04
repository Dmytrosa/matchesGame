import { EntityNameExpression } from "typescript";

export type IContext = {
    leftMatches : number;
    setLeftMatches: React.Dispatch<React.SetStateAction<number>>;
    botTern: boolean;
    setBotTern :React.Dispatch<React.SetStateAction<boolean>>;
    score: { playerscore: number; botscore: number; };
    setscore :React.Dispatch<React.SetStateAction<{ playerscore: number; botscore: number; }>>;
    currentBet: { playersCurrent: null | number; botsCurrent: null | number; } ;
    setcurrentBet: React.Dispatch<React.SetStateAction<{ playersCurrent: null ; botsCurrent: null ; }>>;
    IsoneOnFire: boolean; 
    SetIsoneOnFire: React.Dispatch<React.SetStateAction<boolean>>;
    IstwoOnFire: boolean; 
    SetIstwoOnFire :React.Dispatch<React.SetStateAction<boolean>>;
    IsthreeOnFire: boolean; 
    SetIsthreeOnFire: React.Dispatch<React.SetStateAction<boolean>>;
    isOver: boolean; 
    setIsOver : React.Dispatch<React.SetStateAction<boolean>>;
    isFirstRender: boolean;
    setIsFirstRender : React.Dispatch<React.SetStateAction<boolean>>;
  }
import './App.css';
import Bot from './components/Bot';
import Home from './components/Home/Home';
import { Context } from './context';
import {  useState } from 'react';
import q from "./App.module.css"

type Props={
}

function App ({}: Props): JSX.Element  {
  const [IsoneOnFire, SetIsoneOnFire] = useState(false)
  const [IstwoOnFire, SetIstwoOnFire] = useState(false)
  const [IsthreeOnFire, SetIsthreeOnFire] = useState(false)
  const [isOver, setIsOver] = useState(false)
  const [botTern, setBotTern] = useState(false)
  const [leftMatches, setLeftMatches] = useState(25)
  const [score, setscore] = useState({ playerscore: 0, botscore: 0 })
  const [currentBet, setcurrentBet] = useState({ playersCurrent: null , botsCurrent: null })
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isReady, SetIsReady] = useState(false)
  return (
    <div className="App">
      <Context.Provider value ={{
        leftMatches , setLeftMatches,
        botTern, setBotTern,
        score, setscore,
        currentBet, setcurrentBet,
        IsoneOnFire, SetIsoneOnFire,
        IstwoOnFire, SetIstwoOnFire,
        IsthreeOnFire, SetIsthreeOnFire,
        isOver, setIsOver,
        isFirstRender, setIsFirstRender
      }} >

        {!isReady ?
          <div className={q.center} >
            <input type="checkbox" onClick={() => { setIsFirstRender(!isFirstRender) }} className="ui-checkbox">
            </input>
            Bot will start first
            <button className={q.button} onClick={() => { SetIsReady(true) }}> 
            <span className={q.buttoncontent}>  Start </span>
            </button>
          </div>
          : <>
            <Home />
            <Bot/>
          </>
        }

      </Context.Provider>
    </div>
  );
}

export default App;

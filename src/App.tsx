import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { Sub } from './types';

interface AppState{
  subs: Array<Sub>
  newSubsNumber: number

}

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Dapelu hace de moderador a veces",
    pais:"Francia"
  },
  {
    nick: "sergio_serrano",
    subMonths: 7,
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
    pais:"Francia"
  }
]

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub):void =>{
    setSubs(subs => [...subs, newSub])
  }
  
  return (
    <div className="App" ref={divRef}>
        <h1 className="header">Subscribers' list</h1>      
      <List subs={subs}/>
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
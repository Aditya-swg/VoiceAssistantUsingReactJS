import React from 'react'
import "./App.css"
import va from "./assets/ai.png"
import { CiMicrophoneOn } from "react-icons/ci";
import { useContext } from 'react';
import { datacontext } from './context/UserContext';
import speak from "./assets/speak.gif"
import aigif from "./assets/aiVoice.gif"

function App() {
  let {recognition,speaking, setSpeaking,prompt,response,setPrompt,setResponse} = useContext(datacontext)

  return (
    <div className='main'>
      <img src={va} alt="" id="shifra" />
      <span>I'm Shifra, Your Advanced Voice Assistant</span>
      {!speaking?
      <button onClick={()=>{
        setPrompt("listening...")
        setSpeaking(true)
        setResponse(false)
        recognition.start()
      }}>click here<CiMicrophoneOn /></button>
      : 
      <div className='res'>
        {!response? <img src={speak} alt="" id="speak-img"/> :
        <img src={aigif} alt="" id="aigif-img"/>}
        <p>{prompt}</p>
      </div>
    }
    </div>
  )
}

export default App

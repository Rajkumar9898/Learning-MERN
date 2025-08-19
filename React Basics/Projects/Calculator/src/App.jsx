import React from 'react'
import { useState } from 'react';
import styles from "./App.module.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'

function App() {
  let [calVal, setCalVal] = useState("")
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
    } else if (buttonText === '=') {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue)
    }
  }
  return (
    <>
      <div className={styles.calculator} >
        <Display displayValue={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick} ></ButtonsContainer>
      </div>
    </>
  )
}

export default App
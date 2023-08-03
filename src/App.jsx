/* eslint-disable react/no-unknown-property */
import ThemeChange from './components/ThemeChange'
import './App.css'
import {ThemeProvider} from 'styled-components'
import { useState } from 'react'

const darkTheme ={
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black"
}
const lightTheme ={
  pageBackground: "black",
  titleColor: "pink",
  tagLineColor: "pink"
}

const themes= {
  dark:darkTheme,
  light:lightTheme
}

function App() {
  const[theme,setTheme] = useState("light");



  return (
    <div>
      <ThemeProvider theme ={themes[theme]}>
        <ThemeChange theme ={theme} setTheme={setTheme}/>
      </ThemeProvider>
  
    </div>
  )
}

export default App

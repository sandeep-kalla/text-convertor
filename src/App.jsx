import { useState } from "react"
import Buttons from "./components/Buttons"
import Input from "./components/Input"
import Headings from "./components/Headings"
import './App.css'

const App = () => {
  const [input,setInput] = useState("")
  const [button,setButton] = useState(false)
  const [bgcolor,setBgcolor] = useState("")

  const getInput = (val) => {
    setInput(val.target.value)
    console.log(input)
    setButton(false)
  }

  const upperCase = () => {
    var str = input
    str = str.toUpperCase()
    setInput(str)
    setButton(true)
    setBgcolor("#ddfff7")
  }

  const lowerCase = () => {
    var str = input
    str = str.toLowerCase()
    setInput(str)
    setButton(true)
    setBgcolor("#93E1D8")
  }

  const camelCase = () => {
    let str = ""
    input.split(" ").forEach(s => {
      str += s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
    });
    setInput(str)
    setButton(true)
    setBgcolor("#FFA69E")
  }
  return (
    <div className="container text-center">
      <Headings text={"Text Case Convertor App"} class={"alert alert-success"}/>
      {
        button ? <Headings class={"alert answer"} text={input} color={bgcolor}/>
        : null
      }
      
      <Input class={"form-control"} fn={getInput}/>
      <div className="buttons">
        <Buttons class={"btn btn-lg btn-outline-success"} name={'Upper Case ☝️'} fn={upperCase}/>
        <Buttons class={"btn btn-lg btn-outline-success"} name={'Lower Case 👇'} fn={lowerCase}/>
        <Buttons class={"btn btn-lg btn-outline-success"} name={'Camel Case 🐫'} fn={camelCase}/>
      </div>
    </div>
  )
}

export default App

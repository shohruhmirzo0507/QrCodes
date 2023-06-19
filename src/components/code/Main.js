import React, { useState, useEffect} from 'react'
import "./Main.css"

function Main() {

const [temp, setTemp] = useState("")
const [word, setWord] = useState("")
const [codes, setCodes] = useState("")
const [color, setColor] = useState("")

useEffect(() => {
    setCodes(`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${""}x${""}&color=${color}`)
}, [word, color]);


function generate() {
    setWord(temp)
}


  return (
    <div className='container'>
        <br />
        <h1 className='top'>Qrcode yasash | shohruhmirzo</h1>
        <div className="input__text">
            <input className='search' placeholder='Enter' type="text" onChange={(e) => {setTemp(e.target.value)}}/>
        </div>
        <div className="output">
            <img src={codes} alt="Qr code" />
        </div>
        <div className="buttonArea">
            <button onClick={generate} className="button">
                Generate
            </button>

            <a href={codes} download="QrCodes">
                <button className="downloadBtn">Download</button>
            </a>
            <input type="color" onChange={(e) => {setColor(e.target.value.substring(1))}}/>
        </div>
    </div>
  )
}

export default Main
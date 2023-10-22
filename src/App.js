import React from 'react'
import Button from './Components/Button'
import {GoBell, GoDownload, GoDatabase} from "react-icons/go"

function App() {
  return (
    <>
      <div>
        <Button primary outline >Primary</Button>
      </div>
      <div>
        <Button secondary><GoBell className='mr-1'/> Secondary</Button>
      </div>
      <div>
        <Button success rounded outline> Success</Button>
      </div>
      <div>
        <Button danger><GoDownload className='mr-1'/> Danger</Button>
      </div>
      <div>
        <Button warning outline><GoDatabase className='mr-1'/>Warning</Button>
      </div>
      <div>
        <Button >Plain</Button>
      </div></>
  )
}

export default App

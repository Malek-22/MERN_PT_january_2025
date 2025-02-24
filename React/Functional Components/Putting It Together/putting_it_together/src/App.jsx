import React, { useState } from 'react'
import PersonCard from './component/PersonCard'

function App() {

  return(
    <>
     <div className="App">
            <PersonCard firstName="Doe" lastName="Jane" age={45} hairColor="Black" />
            <PersonCard firstName="Smith" lastName="John" age={88} hairColor="Brown" />
        </div>
    </>
  )
}

export default App
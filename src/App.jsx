import React from 'react'
import ChildComp1 from './components/ChildComp1'
import ChildComp2 from './components/ChildComp2'
import ChildComp3 from './components/ChildComp3'

const App = () => {
  return (
    <div>
      <h1>From App</h1>
      <ChildComp1 />
      <ChildComp2 />
      <ChildComp3 />
    </div>
  )
}

export default App
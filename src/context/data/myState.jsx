import React from 'react'
import myContext from './myContext'
function myState(props) {
    const state ={
        name:'jotiraj',
        rollNo:12
    }
  return (
    <myContext.Provider value={state}>
        {props.children}
    </myContext.Provider>
  )
}

export default myState
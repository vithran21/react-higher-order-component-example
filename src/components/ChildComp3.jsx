import React from 'react'
import WrapperComp from './WrapperComp'

const ChildComp3 = (props) => {
  return (
    <div>{props.details.city}</div>
  )
}

export default WrapperComp(ChildComp3);
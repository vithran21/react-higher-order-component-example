import React from 'react'
import WrapperComp from './WrapperComp'

const ChildComp2 = (props) => {
  return (
    <div>{props.details.age}</div>
  )
}

export default WrapperComp(ChildComp2);
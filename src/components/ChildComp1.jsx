import React from 'react'
import WrapperComp from './WrapperComp'

const ChildComp1 = (props) => {
  return (
    <div>
        {props.details.name}
    </div>
  )
}

export default WrapperComp(ChildComp1);
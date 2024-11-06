import React from 'react';

const WrapperComp = (Child) => {
  // Return a new functional component
  return function WrapperComponent(props) {
    return (
      <Child 
        details={{ name: "pavithran", age: 29, city: "chennai" }}
        {...props}
      />
    );
  };
};

export default WrapperComp;

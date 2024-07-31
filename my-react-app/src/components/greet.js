import React from 'react'

// const Greet = (props) => {
//   console.log(props)
//   return (
//     // <div>
//     //     <h1>Hello World! From {props.deptName}</h1>
//     // </div>
//     <h1>Welcome to the Charusat {props.name}</h1>
//   )
// }

const Greet = ({name, institue}) => {
  return (
    <div>
        <h1>Welcome to Charusat {name} institue {institue}</h1>
    </div>
  )
}

export default Greet
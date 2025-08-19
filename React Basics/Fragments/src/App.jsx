import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// function Fragments() {
//   return (
//     <>
//       <h1>Healthy Foods</h1>
//       <ul class="list-group">
//         <li class="list-group-item">An item</li>
//         <li class="list-group-item">A second item</li>
//         <li class="list-group-item">A third item</li>
//         <li class="list-group-item">A fourth item</li>
//         <li class="list-group-item">And a fifth one</li>
//       </ul>
//     </>
//   )
// }
//let s uppose we want to show not manual but array or data coming from api
function Fragments() {
  let foodItems = ["Dal","Bhat","Roti","Dahi"]
  return (
    <>
       <h1>Healthy Foods</h1>
      <ul className="list-group">
        {foodItems.map((item,index) => (
        <li key={index}className="list-group-item kg-item">{item}</li>

        ))}
      </ul>
    </>
  )
}

export default Fragments
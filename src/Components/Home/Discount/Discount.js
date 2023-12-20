import React from 'react'
import "./Discount.css"
export default function Discount() {
  return (
    <div style={{  backgroundImage: "url(./images/Dis.jpg)"}} className='Discount'>
      <div className='container'>
        <h3>December sale is on! <br/>
    with big <span>Discount...</span></h3>
    <div className="sale-percent">
        <span>Sale! <br/> Upto</span>50% <span>off</span>
        </div>
      </div>
    </div>
  )
}

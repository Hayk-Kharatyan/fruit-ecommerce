import React from 'react'
import "./Header.css"
import "animate.css"
import { useEffect } from 'react';
import WOW from 'wowjs';
export default function Header() {
  useEffect(() => {
    new WOW.WOW({
      live: false 
    }).init();
  },[])
  return (
    <div className='background-header'>
      <div className='container animate__fadeInDown wow animate__animated'>
      <p>We sale fresh fruits</p>
      <h1>About Us</h1>
      </div>
    </div>
  )
}

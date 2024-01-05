import React from 'react'
import "./Why.css"
import "animate.css"
import { useEffect } from 'react';
import WOW from 'wowjs';
export default function Why() {
    useEffect(() => {
        new WOW.WOW({
          live: false 
        }).init();
      },[])
  return (
    <div className='why-div'>
      <div className='container'>
        <div className='why-info'>
        <h2>Why <span>Fruitkha</span></h2>
        <div className='flex-why'>
            <div className='winfo wow animate__animated animate__fadeInLeftBig '>
                <div className='icon-truck'></div>
                <div className='why-text'>
                    <h3>Home Delivery</h3>
                    <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                </div>
            </div>
            <div className='winfo wow animate__animated animate__fadeInRightBig'>
                <div className='icon-money'></div>
                <div className='why-text'>
                    <h3>Best Price</h3>
                    <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                </div>
            </div>
            <div className='winfo wow animate__animated animate__fadeInLeftBig '>
                <div className='icon-briefcase'></div>
                <div className='why-text'>
                    <h3>Custom Box</h3>
                    <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                </div>
            </div>
            <div className='winfo wow animate__animated animate__fadeInRightBig'>
                <div className='icon-refresh'></div>
                <div className='why-text'>
                    <h3>Quick Refund</h3>
                    <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

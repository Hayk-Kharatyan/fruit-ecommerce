import React from 'react'
import "./Why.css"
export default function Why() {
  return (
    <div className='why-div'>
      <div className='container'>
        <div className='why-info'>
        <h2>Why <span>Fruitkha</span></h2>
        <div className='flex-why'>
            <div className='winfo'>
                <div className='icon-truck'></div>
                <div className='why-text'>
                    <h3>Home Delivery</h3>
                    <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                </div>
            </div>
            <div className='winfo'>
                <div className='icon-money'></div>
                <div className='why-text'>
                    <h3>Best Price</h3>
                    <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                </div>
            </div>
            <div className='winfo'>
                <div className='icon-briefcase'></div>
                <div className='why-text'>
                    <h3>Custom Box</h3>
                    <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                </div>
            </div>
            <div className='winfo'>
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

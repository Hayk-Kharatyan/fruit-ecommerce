import React from 'react'
import "./List.css"
export default function List() {
    return (
        <div className='List'>
            <div className='container-list'>
                <div className='block-list'>
                    <div className='Icon'><span className='icon-truck'></span></div>
                    <div className='Content'>
                        <h3>Free Shipping</h3>
                        <p>When order over $75 </p>
                    </div>
                </div>
                <div className='block-list'>
                    <div className='Icon'><span className='icon-volume-control-phone'></span></div>
                    <div className='Content'>
                        <h3>24/7 Support</h3>
                        <p>Get support all day</p>
                    </div>
                </div>
                <div className='block-list'>
                    <div className='Icon'><span className='icon-refresh'></span></div>
                    <div className='Content'>
                        <h3>Refund</h3>
                        <p>Get refund within 3 days!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

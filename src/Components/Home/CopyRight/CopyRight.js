import React from 'react'
import "./CopyRight.css"
export default function CopyRight() {
  return (
    <div className='CopyRight'>
      <div className='container'>
        <div className='Copyflex'>
            <div className='Copytxt'>
                <p>Copyrights © 2019 - <span>Imran Hossain</span>,All Rights Reserved.<br/> Distributed By - <span>Themewagon</span></p>
            </div>
            <div className='social-icons'>
                <ul>
                    <li className='icon-facebook-f'></li>
                    <li className='icon-twitter'></li>
                    <li className='icon-instagram'></li>
                    <li className='icon-linkedin-square'></li>
                    <li className='icon-dribbble'></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

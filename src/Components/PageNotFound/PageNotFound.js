import React from 'react'
import "./PageNotFound.css"
import { Link } from 'react-router-dom'
import Carusel from '../Home/LogoCarusel/Carusel'
import PopNav from '../PopupNav/PopNav'
import Preloader from '../Preloader/Preloader'
export default function PageNotFound({Modal}) {
  return (
    <div className='page-error'>
         { Modal && <PopNav/>  }
         <Preloader/>

      <div className='page-txt'>
        <div className='container'>
            <p>FRESH ADN ORGANIC</p>
            <h1>404 - Not Found</h1>
        </div>
        </div>
        <div className='full-height'>
            <div className='container'>
            <div className='full-txt'>
                <p className='icon-sad'></p>
                <h1>Oops! Not Found.</h1>
                <p>The page you requested for is not found.</p>
                <Link className='decor' to="/"><button className='btn-return'>Back to Home</button></Link>
            </div>
            </div>
        </div>
        <Carusel/>
  
    </div>
  )
}

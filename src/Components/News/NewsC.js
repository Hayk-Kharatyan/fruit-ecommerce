import React from 'react'
import "./NewsC.css"
import { NewsComp } from '../../DataProducts/Data'
import PopNav from '../PopupNav/PopNav'
import Preloader from '../Preloader/Preloader'
import "animate.css"
import { useEffect } from 'react';
import WOW from 'wowjs';
export default function News({ Modal }) {
    useEffect(() => {
        new WOW.WOW({
          live: false 
        }).init();
      },[])
    let NewsMaped = NewsComp
    return (
        <div className='News-div'>
            <Preloader/>
             { Modal && <PopNav/>  }
            <div className='News-txt'>
                <div className='container wow animate__animated animate__fadeInDown'>
                    <p>ORGANIC INFORMATION</p>
                    <h1>News Article</h1>
                </div>
            </div>


            <div className='container'>
                <div className='news-flex'>
                    {
                        NewsMaped.map((news) => {
                            return (
                                <div key={news.id} className={`news-div wow animate__animated ${news.animate}`}>
                                    <div className='bg-image'><img alt='news' width="350px" height="200px" src={news.src}></img></div>
                                    <div className='news-txt'>
                                        <h3>{news.name}</h3>
                                        <p className='authors'>
                                            <span className='icon-user'></span>
                                            <span className='adm'>Admin</span>

                                            <span className='icon-calendar'></span>
                                            <span className='t'> 27 December, 2019</span>
                                        </p>
                                        <p className='newstext'>Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                                        <span className='read'>read more <span className='icon-chevron-right'></span></span>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>



        </div>
    )
}

import React from 'react'
import "./News.css"
import { NewsRender } from '../../../DataProducts/Data'
import { useEffect } from 'react';
import WOW from 'wowjs';
export default function News() {
  useEffect(() => {
    new WOW.WOW({
      live: false 
    }).init();
  },[])
    let NewsMap = NewsRender
  return (
    <div className='News'>
      <div className='container'>
        <div className='title-news'>
            <h3><span>Our</span> News</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
        </div>
        <div className='Newsflex'>
        {
            NewsMap.map((news)=>{
                return(
                    <div key={news.id} className={`news-div wow animate__animated ${news.animate} `}>
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
      <div className='more-news'>
        <button className='btn-more'>More News</button>
      </div>
    </div>
  )
}

import React from 'react'
import "./Home.css"
import List from './List/List'
import Products from './Products/Products'
import Deal from './Deal/Deal'
import SwiperPeople from '../Swiper/SwiperPeople'
import Since from './Since/Since'
import Discount from './Discount/Discount'
import News from './News/News'
import Carusel from './LogoCarusel/Carusel'
import PopNav from '../PopupNav/PopNav'
import Preloader from '../Preloader/Preloader'
import "animate.css"
import { useEffect } from 'react';
import WOW from 'wowjs';
export default function Home({ Modal }) {
    useEffect(() => {
        new WOW.WOW({
          live: false 
        }).init();
      },[])
    return (
        <div className='Home'>
            <Preloader  />
            <div className='img-back'>
                <div className='container'>
                    { Modal && <PopNav/>  }
                    <div className='fresh-subline wow animate__animated animate__fadeInUp'>
                        <p>FRESH & ORGANIC</p>
                        <h1>Delicious Seasonal Fruits</h1>
                        <div className='btns'>
                            <button className='orange-border-no'>Fruit Collection</button>
                            <button className='orange-border'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>

            <List />

            <Products />

            <Deal />

            <SwiperPeople />

            <Since />

            <Discount />

            <News />

            <Carusel />

        </div>
    )
}

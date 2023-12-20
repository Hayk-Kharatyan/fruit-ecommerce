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
export default function Home({ Modal }) {

    return (
        <div className='Home'>
            <div className='img-back'>
                <div className='container'>
                    { Modal && <PopNav/>  }
                    <div className='fresh-subline'>
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

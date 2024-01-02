import React from 'react'
import "./About.css"
import Header from './Header/Header'
import Why from './Why/Why'
import Discount from '../Home/Discount/Discount'
import SwiperPeople from '../Swiper/SwiperPeople'
import Team from './Team/Team'
import PopNav from '../PopupNav/PopNav'
import Preloader from '../Preloader/Preloader'

export default function About({ Modal }) {
  return (
    <div className='about'>
      <Preloader/>

  { Modal && <PopNav/>  }
  
      <Header />

      <Why />

      <Discount />

      <Team />

      <SwiperPeople />
    </div>
  )
}

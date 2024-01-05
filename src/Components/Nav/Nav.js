import React, { useContext, useState } from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import { Context } from '../Provider/Context'
export default function Nav({ Modal, setModal }){
  let changeContext = useContext(Context)
  let [Classname, setClassName] = useState("absolute")
  let [burger, setBurger] = useState(false)

  const changetheme = (() => {
    if (window.scrollY >= 80) {
      setClassName("fixed")
    } else {
      setClassName("absolute")
    }
  })

  window.addEventListener("scroll", changetheme)

  return (
    <div className={Classname}>

      <div className='left'>
       <Link className='decor' to="/fruit-ecommerce"><img width="150px" height="43px" alt='logo' src='./images/logo.png'></img></Link> 
      </div>
      <div className='middle'>
        <Link className='decor' to="/fruit-ecommerce"><span className='orange'>Home</span></Link>
        <Link className='decor' to="/about"><span>About</span></Link>
        <Link className='decor' to="/news"><span>News</span></Link>
        <Link className='decor' to="/contact"><span>Contact</span></Link>
        <Link className='decor' to="/shop"><span>Shop</span></Link>
      </div>
      <div className='right'>
       <Link className='decor' to="/cart"><button className=' icon-shopping-cart  none '><span>{changeContext.Counter === 0 ? "" : changeContext.Counter}</span></button></Link> 
        <button className='icon-search'></button>
        <button onClick={() => {
          setBurger(!burger)
          setModal(!Modal)
        }} className={burger ? "icon-times btn-bruger" : "icon-menu btn-bruger"}><span>{changeContext.Counter === 0 ? "" : changeContext.Counter}</span></button>
      </div>
    </div>
  )
}

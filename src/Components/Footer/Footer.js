import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='Footer'>
      <div className='container'>
        <div className='Info'>
            <div className='About'>
                <h2>About us</h2>
                <p>Ut enim ad minim veniam perspiciatis <br/> unde omnis iste natus error sit<br/> voluptatem accusantium doloremque<br/> laudantium, totam rem aperiam,<br/> eaque ipsa quae.</p>
            </div>
            <div className='get-in-touch'>
            <h2>Get in Touch</h2>
            <ul>
                <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
                <li>support@fruitkha.com</li>
                <li>+00 111 222 3333</li>
            </ul>
            </div>
            <div className='pages'>
              <h2>Pages</h2>
                <ul>
                    <Link className='decor' to="/fruit-ecommerce"><li><span className='icon-chevron-right'></span>Home</li></Link> 
                    <Link className='decor' to="/about"><li><span className='icon-chevron-right'></span>About</li></Link>
                    <Link className='decor' to="/shop"><li><span className='icon-chevron-right'></span>Shop</li></Link>
                    <Link className='decor' to="/news"><li><span className='icon-chevron-right'></span>News</li></Link>
                    <Link className='decor' to="/contact"><li><span className='icon-chevron-right'></span>Contact</li></Link>
                </ul>
            </div>
            <div className='subscribe'>
                <h2>Subscribe</h2>
                <p>Subscribe to our mailing list to get the <br/> latest updates.</p>
                <input placeholder='E-mail'/>
                <button className='icon-send'></button>
            </div>
        </div>
      </div>
    </div>
  )
}

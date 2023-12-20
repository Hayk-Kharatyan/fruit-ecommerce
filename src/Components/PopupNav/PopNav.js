import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Provider/Context'
import { useContext } from 'react'
import "./PopNav.css"
export default function PopNav() {
    let changeContext = useContext(Context)
    return (
        <div className='menu-drop'>
            <ul>
                <Link className='decor' to="/"><li>Home</li></Link>
                <Link className='decor' to="/about"><li>About</li></Link>
                <Link className='decor' to="/shop"><li>Shop</li></Link>
                <Link className='decor' to="/news"><li>News</li></Link>
                <Link className='decor' to="/contact"><li>Contact</li></Link>
                <Link className='decor' to="/cart"><li>
                    <button className='icon-shopping-cart countrel '>
                        <span>{changeContext.Counter === 0 ? "" : changeContext.Counter}</span>
                    </button>
                </li>
                </Link>
            </ul>
        </div>
    )
}

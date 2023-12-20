import React from 'react'
import "./Products.css"
import { ProductsRender } from '../../../DataProducts/Data'

 export default function Products() {
    let arr = ProductsRender    
  return (
    <div className='Products'>
      <div className='container'>
        <div className='Title-Product'>
            <h3><span>Our </span>Products</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas <br/> itaque eveniet beatae optio.</p>
        </div>
        <div className='Items'>
            {
                arr.map((item)=>{
                    return(
                        <div key={item.id} className='item'>
                            <div className='image'> 
                                <img width="261px" height="261px" alt='fruit' src={item.src}></img>
                                <h3 className='name'>{item.name}</h3>
                                <h4 className='kg'>Per Kg</h4>
                                <h2 className='price'>{item.price}$</h2>
                                <button className='item-btn'>See More Products</button>
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

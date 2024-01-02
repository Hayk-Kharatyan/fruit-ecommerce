import React, { useContext, useState } from 'react'
import "./Shop.css"
import { ProductsCart } from '../../DataProducts/Data'
import { Context } from '../Provider/Context'
import PopNav from '../PopupNav/PopNav'
import Preloader from '../Preloader/Preloader'
export default function Shop({ Modal }) {
    let ProductsElems = ProductsCart
    let [ProductType, setProductType] = useState(ProductsElems)
    let ChangeContext = useContext(Context)
    return (
        <div className='Shop'>
            <Preloader/>
             { Modal && <PopNav/>  }
            <div className='Shop-txt'>
                <div className='container'>
                    <p>GET 24/7 SUPPORT</p>
                    <h1>Contact us</h1>
                </div>
            </div>
            <div className='Shop-Items'>
                <div className='container'>
                    <div className='filter-products'>
                        <button onClick={() => {
                            setProductType(ProductsElems)
                        }}>All</button>
                        <button onClick={() => {
                            let strawberry = ProductsElems.filter((product) => product.name.includes("Strawberry"))
                            setProductType(strawberry)
                        }}>Strawberry</button>
                        <button onClick={() => {
                             let Berry = ProductsElems.filter((product) => product.name.includes("Berry"))
                             setProductType(Berry)
                        }}>Berry</button>
                        <button onClick={() => {
                              let Lemon = ProductsElems.filter((product) => product.name.includes("Lemon"))
                              setProductType(Lemon)
                        }}>Lemon</button>
                    </div>
                    <div className='Products'>
                        {
                            ProductType.map((product) => {
                                return (
                                    <div key={product.id} className='Product'>
                                        <div className='product-img'>
                                            <img alt='fruit' src={product.src}></img>
                                        </div>
                                        <h3>{product.name}</h3>

                                        <h5>Per Kg</h5>

                                        <p>{product.price} $</p>

                                        <button onClick={()=>{
                                        ChangeContext.dispatch({
                                            type: "add",
                                            payload: {
                                              id: product.id,
                                              img: product.src,
                                              name:product.name,
                                              price: product.price,
                                              counter: product.counter,
                                            }
                                        })  
                                        }} className='btn-buy'><span className='icon-shopping-cart'></span>Add to Cart</button>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

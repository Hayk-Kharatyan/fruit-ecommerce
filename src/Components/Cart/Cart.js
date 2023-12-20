import React, { useContext } from 'react'
import "./Cart.css"
import Carusel from '../Home/LogoCarusel/Carusel'
import { Context } from '../Provider/Context'
import PopNav from '../PopupNav/PopNav'
export default function Cart({ Modal }) {
    let ChangeContext = useContext(Context)
    return (
        <div className='Cart'>
             { Modal && <PopNav/>  }
            <div className='Cart-txt'>
                <div className='container'>
                    <p>GET 24/7 SUPPORT</p>
                    <h1>Contact us</h1>
                </div>
            </div>
            <div className='items-pay'>
                <div className='container'>
                    <div className='Totals-flex'>
                        <div className='total-div'>
                        <table>
                            <thead className="cart-table-head">
                                <tr className="table-head-row">
                                    <th></th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ChangeContext.state.map((st) => {
                                        return (
                                            <tr className="table-body-row">
                                                <td className="product-remove"><button onClick={()=>{
                                                    ChangeContext.dispatch({
                                                        type: "del",
                                                        payload: {
                                                          id: st.id,
                                                          price: st.price,
                                                          counter: st.counter,
                                                        }
                                                    })
                                                }} className='icon-close'></button></td>
                                                <td className="product-image"><img width="50px" height="50px" src={st.img} alt="img"></img></td>
                                                <td className="product-name">{st.name}</td>
                                                <td className="product-price">{st.price}$</td>
                                                <td className="product-quantity">{st.counter}</td>
                                                <td className="product-total">{st.counter * st.price}$</td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                        </div>
                        <div className='price-all'>
                        <table className="total-table">
							<thead className="total-table-head">
								<tr className="table-total-row">
									<th>Total</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								<tr className="total-data">
									<td><strong>Subtotal:</strong></td>
									<td>{ChangeContext.Total}$</td>
								</tr>
								<tr className="total-data">
									<td><strong>Shipping: </strong></td>
									<td>5$</td>
								</tr>
								<tr className="total-data">
									<td><strong>Total: </strong></td>
									<td>{ChangeContext.Total + 5}$</td>
								</tr>
							</tbody>
						</table>
                        </div>
                    </div>
                </div>
            </div>
            <Carusel />
        </div>
    )
}

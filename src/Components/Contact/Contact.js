import React from 'react'
import "./Contact.css"
import PopNav from '../PopupNav/PopNav'
export default function Contact({ Modal }) {
    return (
        <div className='Contacts'>
             { Modal && <PopNav/>  }
            <div className='Contact-txt'>
                <div className='container'>
                    <p>GET 24/7 SUPPORT</p>
                    <h1>Contact us</h1>
                </div>
            </div>
            <div className='container'>
                <div className='form-flex'>

                    <div className='inputs-div'>
                        <h2>Have you any question?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!</p>
                        <div className='inputs'>
                            <div className='flex-inp'>
                                <input type='text' className='input-f' placeholder='Name' />
                                <input type='email' className='input-f' placeholder='Email' />
                            </div>


                            <div className='flex-inp'>
                                <input type='tel' className='input-f' placeholder='Phone' />
                                <input type='text' className='input-f' placeholder='Subject' />
                            </div>



                            <textarea className='txtarea' placeholder='Message'></textarea>
                            <div className='btn-submit'>
                                <button>Submit</button>
                            </div>

                        </div>
                    </div>
                    <div className='inputs-txt'>
                        <div className='i-div'>
                            <h4><span className='icon-map'></span>Shop Address</h4>
                            <p>
                                34/8, East Hukupara
                                <br />
                                Gifirtok, Sadan.
                                <br />
                                Country Name
                            </p>

                        </div>
                        <div className='i-div'>
                            <h4><span className='icon-access_time'></span>Shop Hours</h4>
                            <p>
                                MON - FRIDAY: 8 to 9 PM
                                <br />
                                SAT - SUN: 10 to 8 PM
                            </p>

                        </div>
                        <div className='i-div'>
                            <h4><span className='icon-address-book'></span>Contact</h4>
                            <p>
                                Phone: +00 111 222 3333
                                <br />
                                Email: support@fruitkha.com
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

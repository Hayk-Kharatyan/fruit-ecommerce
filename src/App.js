import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useReducer, useState } from 'react'
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import CopyRight from './Components/Home/CopyRight/CopyRight';
import About from './Components/About/About';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import News from './Components/News/NewsC';
import Contact from './Components/Contact/Contact';
import Shop from './Components/Shop/Shop';
import { Context } from './Components/Provider/Context';
import Cart from './Components/Cart/Cart';

function App() {
  let [Counter, setCounter] = useState(0)
  let [Total, setTotal] = useState(0)
  let [Modal, setModal] = useState(false)
  let [state, dispatch] = useReducer(reducer, [])

  function reducer(state, action) {
    if (action.type === "add") {
      let statment = state.filter((item) => item.id === action.payload.id)
      setCounter(Counter + 1)
      setTotal(Total + action.payload.price * action.payload.counter)
      if (statment.length > 0) {
        let newState = state.map((st) => {
          if (st.id === action.payload.id) {
            st.counter = st.counter + 1
          }
          return st
        })

        return newState
      }
      else {
        return [
          ...state,
          {
            name: action.payload.name,
            img: action.payload.img,
            id: action.payload.id,
            price: action.payload.price,
            counter: action.payload.counter
          }
        ]
      }

    }

    else if (action.type === "del") {
      setTotal(Total -= action.payload.price * action.payload.counter)
      setCounter(Counter -= action.payload.counter)
      return state.filter((sta) => sta.id !== action.payload.id)
    }

  }
  return (
    <Context.Provider value={
      { state: state, Counter: Counter, setcounter: setCounter, Total: Total, setTotal: setTotal, dispatch: dispatch }
    }>
      <div className="App">
        {/* <div className='loader'>
      <div className='loader-inner'>
        <div className='circle'>

        </div>
      </div>
      </div> */}
        <Nav Modal={Modal} setModal={setModal} />
        <Routes>
          {/* <Route path="*" element={<PageNotFound Modal={Modal} />} /> */}
          <Route path='/' element={<Home Modal={Modal} />}></Route>
          <Route path='/about' element={<About Modal={Modal} />}></Route>
          <Route path='/news' element={<News Modal={Modal} />}></Route>
          <Route path='/contact' element={<Contact Modal={Modal} />}></Route>
          <Route path='/shop' element={<Shop Modal={Modal} />}></Route>
          <Route path='/cart' element={<Cart Modal={Modal} />}></Route>
        </Routes>
        <Footer />

        <CopyRight />
      </div>
    </Context.Provider>
  );
}

export default App;

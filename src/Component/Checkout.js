import React from 'react'
import { useState, useEffect } from 'react'
import '../CSS/checkout.css';


const Checkout = (props) => {

  const [items, setItems] = useState([]);
  const [Totals, setTotals] = useState();



  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }

    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].Price;
      setTotals(total);
    }
    console.log(total);


  }, []);



  console.log(props);
  return (
    <div>
      <h1>
        <div className="backdrop_checkout">
          <div className="main">
            {
              items.map((i) => {
                return (
                  <>
                    <div className='itemVal'>
                      <h2>{i.Name}</h2>
                      <h4>{i.Price}</h4>
                    </div>
                  </>
                )
              })
            }

            <div className="checkout_total">
              <h2>Total Price :</h2>
              <h3>{Totals}</h3>
            </div>

            <div className='checkout_btns'>
              <a href="https://rzp.io/i/jFbEnRd">
                <button>Pay Now</button>
              </a>
              <a href="/">
                <button>Go back</button>
              </a>
            </div>
          </div>
        </div>
      </h1>
    </div>
  )
}

export default Checkout

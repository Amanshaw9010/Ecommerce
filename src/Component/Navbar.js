import React, { useState } from 'react'
import '../CSS/navbar.css';
function Navabar(props) {

    //    console.log(props.data[1].cardData.Name);
    //    console.log(props.c);


    const [display, setDisplay] = useState("none");

    const HandleDisplay = () => {
        if (display === "none") {
            setDisplay("flex");
        } else if (display === "flex") {
            setDisplay("none")
        }
    }

    console.log(props);
    return (
        <>

            <div className='navCont'>

                <div className='rightNav'>
                    <h2>Ecom Website</h2>
                </div>


                <div className="leftNav">
                    <i class="fa-2x fa-solid fa-cart-shopping" onClick={HandleDisplay}></i>
                    {/*cobtn = checkout button */}

                    <div className="counter" >{props.data.length}</div>


                    {
                        props.data.map((curr, currIndex) => {


                            return (
                                <>

                                    <div className='navMain' key={curr} style={{ display: display }}>
                                        <p>Item : {props.data[currIndex].cardData.Name}</p>
                                        <br />
                                        <p>Price : {props.data[currIndex].cardData.Price}</p>

                                    </div>


                                </>
                            )

                        })

                    }
                    <div className='Btns' style={{ display: display }}>
                        <a href="/checkout"  >
                            <button className='cobtn' >Checkout</button>
                        </a>
                    </div>

                </div>
            </div>




        </>
    )
}

export default Navabar


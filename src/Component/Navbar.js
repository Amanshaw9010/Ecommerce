import React, { useEffect, useState } from 'react'
import '../CSS/navbar.css';
function Navabar(props) {

    //    console.log(props.data[1].cardData.Name);
    console.log(props);



    const [display, setDisplay] = useState("none");
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(props.data.length);
    }, )


    const HandleDisplay = () => {
        if (display === "none") {
            setDisplay("flex");
        } else if (display === "flex") {
            setDisplay("none")
        }
       
    }
 

    return (
        <>

            <div className='navCont'>

                <div className='rightNav'>
                    <h2>Ecom Website</h2>
                </div>


                <div className="leftNav">
                    <i class="fa-2x fa-solid fa-cart-shopping" onClick={HandleDisplay}></i>
                    {/*cobtn = checkout button */}

                    <div className="counter" >{count}</div>


                    {
                        props.data.map((curr) => {


                            return (
                                <>
                                    <div className='navMain' key={curr} style={{ display: display }}>
                                        <h1>{curr.Name}</h1>
                                        <h2>{curr.Price}</h2>
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


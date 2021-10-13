import React from 'react'
import "./CartItem.css"

function CartItem({img,title,variation,note,minusIcon,plusIcon,removeIcon}) {
    return (
        <>  
            <div clssName="container-items">
                <div className="container-form">
                    <form method="GET">
                        <div className="container-checkbox">
                            <input type="checkbox" />
                        </div>
                        <div className="container-image">
                            <img src={img} alt={img} />
                        </div>
                        <div className="container-descrip">
                            <h1>{title}</h1>
                            <h2>variation : {variation}</h2>
                            <p>note : {note}</p>
                        </div>
                        <div className="container-option">
                            <div className="container-amount">
                                <div className="container-inline">
                                    <img src={minusIcon} className="amount-icon" />
                                    <div className="amount-number">
                                        <h1>0</h1>
                                    </div>
                                    <img src={plusIcon} className="amount-icon"/>
                                </div>
                                <div className="container-price">
                                    <h1>Price Rp.000.000</h1>
                                </div>
                            </div>
                            <div className="remove-icon">
                                <img src={removeIcon} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CartItem

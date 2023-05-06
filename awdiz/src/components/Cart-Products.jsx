import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import Reducer, {initialState} from "../Reducer3/reducer";
import "./Cart.css";

function Cart() {
    const [state, dispatch] = useReducer(Reducer, initialState)
    console.log(state, "state")
    
    function handleButtonClick(){
        dispatch({type: 'incremented_age'})
    }

    function handleButtonClickForDec(){
        dispatch({type: 'decremented_age'})
    }
    const [userStatus, setUserStatus] = useState(false);
    const [cartData, setCartData] = useState();
    const [userName, setUserName] = useState("");
    const route = useNavigate();
    const [userloginData, setUserLoginData] = useState("")
    useEffect(() => {
        displayCart();
    }, []);

    function GotoSignin() {
        route('/register');
    }

    function displayCart() {

        var usersFromDB = JSON.parse(localStorage.getItem("userData"));
        var currentUser = JSON.parse(localStorage.getItem("current-user"));
        setUserLoginData(currentUser);

        for (var i = 0; i < usersFromDB.length; i++) {
            if (usersFromDB[i].email === currentUser['current-user-email'] && usersFromDB[i].cartData) {
                setUserStatus(true);
                setUserName(usersFromDB[i].name);
                setCartData(usersFromDB[i].cartData);
            }
        }

    }
    return (
        <div id="cart">
            <div>
                <div className="navbar">
                    <div className="navbar-l adjust-width-l">
                        <div>
                            <img
                                src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg"
                                alt="logo"
                            />
                        </div>
                        <div>
                            <p>
                                <strong>SECURE CHECKOUT </strong>
                            </p>
                        </div>
                    </div>

                    <div className="navbar-r adjust-width-r">
                        <div>
                            <i className="fa-regular fa-circle-question"></i>
                            <p>Help</p>
                        </div>
                        <div>
                            <i className="fa-regular fa-user"></i>
                            {userloginData ? <p>{userName}</p> : <p onClick={() => { GotoSignin() }}>Log in </p>}
                        </div>
                    </div>
                </div>
            </div>

            {userStatus ? (
                <div className="cart-order">
                    <div>
                        <div className="cart-order-l">
                            <div>
                                <div className="cart-order-l-userInfo">
                                    <i className="fa-solid fa-user"></i>
                                    <p>Logged in</p>
                                    <i className="fa-solid fa-circle-check"></i>
                                </div>
                                <div className="cart-order-l-user-details">
                                    <p>Sneha</p>
                                </div>
                            </div>

                            <div>
                                <div className="cart-order-l-address-top">
                                    <h3>Add a delivery address</h3>
                                    <p>You seem to be in the new location</p>
                                </div>
                                <div className="cart-order-l-address-bot">
                                    <div>
                                        <div>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <h3>Add New Address</h3>
                                            <p>Malad, Malad West, Mumbai, Maharashtra, India</p>
                                        </div>
                                    </div>
                                    <button>ADD NEW</button>
                                </div>
                            </div>
                            <div>
                                <div className="cart-order-l-payment">
                                    <i className="fa-regular fa-credit-card"></i>
                                    <h3>Payment</h3>
                                </div>
                            </div>
                        </div>
                        <div className="cart-order-r">
                            <div className="display-order">
                                {cartData &&
                                    cartData.map((e, i) => (
                                        <div key={i}>
                                            <div>
                                                {" "}
                                                <img src={e.strDrinkThumb} alt="product" />
                                            </div>
                                            <div>
                                                <h3>{e.strDrink}</h3>
                                                <p>Malad West</p>
                                            </div>
                                            {/* <div id="reducer"><button onClick={handleButtonClick}>+</button><h6>Quantity{state.age}</h6><button onClick={handleButtonClickForDec}>-</button></div> */}
                                        </div>
                                        
                                    ))}

                            </div>
                            <div className="apply-coupon">
                                <i className="fa-solid fa-rug"></i>
                                <p>Apply Coupon</p>
                            </div>
                            <div className="bill">
                                <div className="bill-details">
                                    <h4>Bill Details</h4>
                                    <div>
                                        <div>
                                            <p>Item Total</p>
                                            <p>₹ 649</p>
                                        </div>
                                        <div>
                                            <p>Delivery Fee | 0.1 kms</p>
                                            <p>₹ 37</p>
                                        </div>
                                        <div>
                                            <p>Govt Taxes & Other Charges</p>
                                            <p>₹ 53.45</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pay-bill">
                                    <p>TO PAY</p>
                                    <p>₹ 739</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                <div className="cart-top">
                    <div>
                        <div>
                            <img
                                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
                                alt="kitchen"
                            />
                        </div>
                        <h3>Your cart is empty</h3>
                        <p>You can go to home page to view more restaurants</p>
                        <button>SEE RESTAURANTS NEAR YOU</button>
                    </div>
                </div>

            )}
        </div>
    );
}
export default Cart;
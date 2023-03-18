import './Home.css';
import { useState } from "react";
import Register from './Register';
import Login from './Login';

function Home() {
    const [showSignUpPage, setShowSignUpPage] = useState(false);
    const [showLoginPage, setShowLoginPage] = useState(false);

    function display(value) {
        if (value === 'register') {
            setShowSignUpPage(true);
            setShowLoginPage(false);
        }
        else {
            setShowLoginPage(true);
            setShowSignUpPage(false);
        }

    }
    function closePage(value) {
        if(value === 'register'){
          setShowSignUpPage(false);
        }
        else{
          setShowLoginPage(false);
        }
        
      }

    return (
        <>
            {showSignUpPage && <Register onClose={() => closePage('register')} />}
            {showLoginPage && <Login onClose={() => closePage('login')} />}

            <div id="home">
                <div id="body">
                    <div id="leftside">
                        <div id="content">
                            <div>
                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqpHDFHQXYclFyO5rYKUOYQmPT8OrWucjftg&usqp=CAU" alt="swiggy" />
                                </div>
                                <div>
                                    <button onClick={() => display('login')}>Login</button>
                                    <button onClick={() => display('register')}>Sign up</button>
                                </div>
                            </div>
                            <div>
                                <div>Late night at office?</div>
                                <div>Order food from favourite restaurants near you.</div>
                            </div>
                            <div>
                                <input type="text" placeholder="Enter your delivery location" />
                                <input type="submit" value="FIND FOOD" />
                            </div>
                            <div>
                                <div>POPULAR CITIES IN INDIA</div>
                                <div>Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai Pune & more.</div>
                            </div>
                        </div>
                    </div>
                    <div id="rightside">
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" alt="image" />
                    </div>
                </div>
                <div id="bottom">
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" />
                        <div>No Minimum Order</div>
                        <p>Order in for yourself or for the group, <br /> with no restrictions on order value</p>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" />
                        <div>Live Order Tracking</div>
                        <p>Know where your order is at all times, <br /> from the restaurant to your doorstep</p>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" />
                        <div>Lightning-Fast Delivery</div>
                        <p>Experience Swiggy's superfast delivery <br /> for food delivered fresh & on time</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
import './Homepage.css';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { json } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function Homepage() {
    const [products, setProducts] = useState();
    console.log(products, setProducts, 'products here')
    const route = useNavigate();
    // const [user, setUser] = useState("");
    const [users, setUsers] = useState("");
    const [searchData, setSearchData] = useState(" ");

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
            .then(res => res.json())
            .then(json => setProducts(json.drinks));
    }, []);

    console.log(products);

    useEffect(() => {
        var usersFromDB = JSON.parse(localStorage.getItem("userData"));
        var currentUser = JSON.parse(localStorage.getItem("current-user"));
        console.log(currentUser, "currentUser")

        for(var i=0; i<usersFromDB.length; i++){
            if(usersFromDB[i].email === currentUser.email){
                setUsers(currentUser.name);
            } else{
                setUsers(null);
            }
        }
    })

    function goto() {
        route("/cart");
    }

    function registerPage() {
        route("/register");
    }

    function addToCart(e) {
        console.log(e)
        var usersFromDB = JSON.parse(localStorage.getItem("userData"));
        var currentUser = JSON.parse(localStorage.getItem("current-user"));
        console.log(currentUser,"currentUser")

        if (currentUser) {
            for (var i = 0; i < usersFromDB.length; i++) {
                if (usersFromDB[i].email === currentUser.email) {
                    var newObj = usersFromDB[i];
                    newObj["cartData"] = newObj["cartData"] || [];
                    newObj.cartData.push(e);
                    usersFromDB[i] = newObj;
                }
            }
            localStorage.setItem("userData", JSON.stringify(usersFromDB));
            toast.success("Product is added to cart");
            // route('/cart')
        }
        else {
            route('/Login');
            toast.error("login to add products");
        }
    }

    function handleChange(e) {
        setSearchData(e.target.value)
    }

    function handleSubmit() {
        if (searchData) {
            route(`/search/${searchData}`)
        }
    }

    function logouth() {
        route('/');
    }

    return (
        <>
            <div id='navbar'>
                <div id='left-side'>
                    <div onClick={logouth}>
                        < img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7kePdAN8M--WUi0D9x1JkQ6Jq4VKO83JvZ2z3mlHsvWmVDeofqSXUjHsoWGvRHHXAAo&usqp=CAU' alt='swiggyLogo' />
                    </div>
                    <div>
                        <u>Malad West</u> Malad, Malad west, Mumbai
                    </div>
                </div>
                <div id='right-side'>
                    <div id='right-side-search'>
                        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                        <input onChange={(e) => handleChange(e)} type="text" /><button onClick={handleSubmit}>Search</button>
                    </div>
                    <div id='right-side-icon'>
                        <i className="fa-solid fa-tags"></i>
                        <p>Offers<sup>New</sup></p>
                    </div>
                    <div id='right-side-icon'>
                        <i className="fa-regular fa-circle-question"></i>
                        <p>Help</p>
                    </div>
                    {users ? 
                        <div id='right-side-icon-three'>
                            <i className="fa-regular fa-user"></i>
                            <p>{users}</p>{" "}
                        </div>
                     : 
                        <div
                            onClick={() => {
                                registerPage();
                            }}
                            id='right-side-icon-three'
                        >
                            <i className="fa-regular fa-user"></i>
                            <p id='sign.in'>Sign In </p>
                        </div>
                    }
                    <div
                        onClick={() => {
                            goto();
                        }}
                        id='right-side-icon-three'
                    >
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p>Cart</p>
                    </div>
                    
                </div>
            </div>
            <div id='header'>
                <div>
                    <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep' alt='img' />
                    <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t' alt='img' />
                    <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym' alt='img' />
                    <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3' alt='img' />
                </div>
            </div>
            <div id='bodyData'>
                <div>
                    <p>226 restaurants</p>
                </div>
                <div>
                    <p>Relevance</p>
                    <p>Delivery Time</p>
                    <p>Rating</p>
                    <p>Cost: Low To High</p>
                    <p>Cost: High To Low</p>
                    <p>Filters</p>
                </div>
            </div>
            <div id='bodyProducts'>
                {products && products.map((e) => (
                    <div>
                        <img src={e.strDrinkThumb} onClick={() => route(`/homepage/${e.idDrink}`)} />
                        <h4>{e.strDrink}</h4>
                        <p><b>₹200</b> <p>Drink ID:{e.idDrink}</p></p>
                        <div><button onClick={() => addToCart(e)}>Add to Cart</button></div>
                    </div>
                ))
                }
            </div>
            <div id='footer'>
                <div id='div1'>
                    <div>COMPANY</div>
                    <div>
                        About us<br />
                        Team<br />
                        Careers<br />
                        Swiggy Blog<br />
                        Bug Bounty<br />
                        Swiggy One<br />
                        Swiggy Corporate<br />
                        Swiggy Instamart<br />
                        Swiggy Genie
                    </div>
                </div>
                <div id='div2'>
                    <div>CONTACT</div>
                    <div>
                        Help & Support<br />
                        Partner with us<br />
                        Ride with us
                    </div>
                </div>
                <div id='div3'>
                    <div>LEGAL</div>
                    <div>
                        Terms & Conditions<br />
                        Refund & Cancellation<br />
                        Privacy Policy<br />
                        Cookie Policy<br />
                        Offer Terms<br />
                        Phishing & Fraud<br />
                        Corporate – Swiggy Money Codes Terms and Conditions<br />
                        Corporate - Swiggy Discount Voucher Terms and Conditions
                    </div>
                </div>
                <div id='div4'>
                    <div>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv' alt='img1' />
                    </div>
                    <div>
                        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl' alt='img2' />
                    </div>
                </div>
            </div>

        </>
    )


} export default Homepage;
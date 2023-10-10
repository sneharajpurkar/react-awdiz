import './Homepage.css'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const route = useNavigate();
    const [users, setUsers] = useState(null);
    const [searchData, setSearchData] = useState(" ");

    useEffect(() => {
        var usersFromDB = JSON.parse(localStorage.getItem("userData"));
        var currentUser = JSON.parse(localStorage.getItem("current-user"));
        console.log(currentUser, "currentUser")

        for (var i = 0; i < usersFromDB.length; i++) {
            if (usersFromDB[i].email === currentUser.email) {
                setUsers(currentUser.name);
            } else {
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
    function handleChange(e) {
        setSearchData(e.target.value)
    }

    function handleSubmit() {
        if (searchData) {
            route(`/search/${searchData}`)
        }
    }

    return (
        <>
            <div id='navbar'>
                <div id='left-side'>
                    <div>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7kePdAN8M--WUi0D9x1JkQ6Jq4VKO83JvZ2z3mlHsvWmVDeofqSXUjHsoWGvRHHXAAo&usqp=CAU' alt='swiggyLogo' />
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
                    {users ? (
                        <div id='right-side-icon-three'>
                            <i className="fa-regular fa-user"></i>
                            <p>{users} </p>
                        </div>
                    ) : (
                        <div
                            onClick={() => {
                                registerPage();
                            }}
                            id='right-side-icon-three'
                        >
                            <i className="fa-regular fa-user"></i>
                            <p id='sign.in'>Sign In</p>
                        </div>
                    )}
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
        </>
    )
}

export default Navbar;
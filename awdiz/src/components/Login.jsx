import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import {toast} from 'react-hot-toast';

function Login(props) {
    const [userData, setUserData] = useState({ email: "", password: "" });
    console.log(userData, "userData");

    const router = useNavigate();
    // console.log(userData, "userData check here");

    var usersFromDB = JSON.parse(localStorage.getItem("userData"));
        console.log(usersFromDB,"hello");

    function handleSubmit(event) {

        event.preventDefault();

        var flag = false;

        for (var i = 0; i < usersFromDB.length; i++) {
            if (usersFromDB[i].email === userData.email && usersFromDB[i].password === userData.password) {
                flag = true;
            }
        }
        if (flag) {
            var user = {};
            user["current-user-email"] = userData.email;
            localStorage.setItem("current-user", JSON.stringify(user))
            router('/Homepage')
            setUserData({ email: "", password: "" })
            toast.success("Login Done...");
        } else {
            toast.error("Please check email and password");
        }
    }

    function updatingData(e) {
        var name = e.target.name;
        var value = e.target.value;
        // console.log(e.target.name, e.target.value, "updatingData");
        setUserData({ ...userData, [name]: value })
    }

    return (
        <div id="login1">
            <div id="register">
                <div onClick={props.onClose}>X</div>
                <div id="top">
                    <div>
                        <div>Login</div>
                        <div>
                            or <a>create an account</a>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="img" />
                    </div>
                </div>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <label>Email</label><br />
                    <input onChange={updatingData} name='email' value={userData.email} type="email" /><br />
                    <label>Password</label><br />
                    <input onChange={updatingData} name='password' value={userData.password} type="password" /><br />
                    <input id="input" type="submit" value="LOGIN" />
                    <div>By creating an account, I accept the Terms & Conditions & Privacy Policy</div>

                </form>
            </div>
        </div>
    )
}
export default Login;

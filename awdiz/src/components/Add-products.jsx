import { useState } from "react";
import Navbar from "./Navbar";
import React from "react";
const AppProducts = () => {
    const [userProduct, setUserProduct] = useState({ name: "", image: "", price: "" });

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(userData, "after submit");
        var usersFromDB = JSON.parse(localStorage.getItem("userProduct")) || [];
        usersFromDB.push(userProduct);
        localStorage.setItem("userProduct", JSON.stringify(usersFromDB));
        setUserProduct({ name: "", image: "", price: "" });
        alert("Product Added")
    }

    function updatingData(e) {
        var name = e.target.name;
        var value = e.target.value;
        // console.log(e.target.name, e.target.value, "updatingData");
        setUserProduct({ ...userProduct, [name]: value })
    }

    return (
        <>
            <div id="body1">
                <Navbar/>
                <div id="addProducts">
                    <div id="top1">
                        <div>
                            Add Products
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="logo" />
                        </div>
                    </div>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <label>Add Products</label><br />
                        <input onChange={updatingData} name='name' value={userProduct.name} type="text" placeholder="Add Products here" /><br />
                        <label>Add Image</label><br />
                        <input onChange={updatingData} name='image' value={userProduct.image} type="text" placeholder="Add Image Link here" /><br />
                        <label>Add Price</label><br />
                        <input onChange={updatingData} name='price' value={userProduct.price} type="number" placeholder="Add Price here" /><br />
                        <input id="input1" type="submit" value="Add Products" />
                    </form>
                </div>
            </div>
        </>
    )
}
export default AppProducts;
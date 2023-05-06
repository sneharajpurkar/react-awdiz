import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Homepage.css';
import Navbar from "./Navbar"

const SingleProductPage = () => {
    const [singleProduct, setSingleProduct] = useState();
    console.log(singleProduct, 'singleProduct');
    const data = useParams();

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")

            .then((res) => res.json())
            .then((Json) => Json.drinks)
            .then((json) => json.filter((obj) => obj.idDrink === data.idDrink))
            .then((data) => setSingleProduct(data[0]));
    }, [])  
    console.log(data.idDrink)

    return (
        <>
            <Navbar />
            <div id="single-product" >
                {singleProduct && <div>
                    <img src={singleProduct.strDrinkThumb} alt="product" />
                    <h3>{singleProduct.strDrink}</h3>
                    <button>Add to cart</button>
                </div>}
            </div>
        </>
    )
}
export default SingleProductPage;
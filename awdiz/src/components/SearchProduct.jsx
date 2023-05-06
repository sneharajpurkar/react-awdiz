import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import './Homepage.css'

const SearchProductPage = () => {
    const [searchProduct, setSearchProduct] = useState();
    console.log(searchProduct, 'searchProduct');
    const data = useParams();

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")

            .then((res) => res.json())
            .then((Json) => Json.drinks)
            .then((json) => json.filter((obj) => obj.strDrink == data.strDrink))
            .then((data) => setSearchProduct(data));
    }, [])
    console.log(data, "data here")

    return (
        <>
        <Navbar/>
            <div id="search-product">
                {/* <h2>Search Product</h2> */}
                {searchProduct && searchProduct.map((e, i) => (<div key={i}>
                    <img src={e.strDrinkThumb} alt="product" />
                    <h2>{e.strDrink}</h2>
                    <button>Add to cart</button>
                </div>))}

            </div>
        </>
    )
}
export default SearchProductPage;
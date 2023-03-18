import { useEffect, useState } from "react";
import './Effect.css';

const Effect = () => {
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [products, setProducts] = useState();
    console.log(products,setProducts, 'products here')

        // fetch('https://fakestoreapi.com/products')
        // .then(res => res.json())
        // .then(json => setProducts(json))

        useEffect(() => {
            fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then( Json => setProducts(Json));
        });
    

    //useEffect(() => { alert("working") })
    // will execute the code on every render

    //useEffect(() => { alert("will execute the code very first time")}, [])
    // will execute the code only very first time

    //useEffect(() => { alert("will execute the code when state changes")}, [number])
    //wiil execute the code very first time and when the specific state will changes

    //useEffect(() => { alert("for multiple state")}, [number, number2])
    //will execute the code very first time and for multiple states that we passed

    return (
        <>
            {/* <h1>Number - {number}</h1>
            <h1>Number1 - {number2}</h1>
            <button onClick={() => setNumber(number + 1)}>Click</button>
            <button onClick={() => setNumber2(number2 + 1)}>Click for 1</button> */}

            <div id="products">
                {products && products.map((e) => (
                    <div>
                        <img src={e.image} />
                        <h1>{e.title}</h1>
                        <p>{e.price}</p>
                    </div>
                ))
                }
            </div>
        </>
    )
}
export default Effect;
import { useEffect, useState } from "react";

const Effect2 = () => {
    const [products, setProducts] = useState();
    console.log(products, setProducts, 'products here')

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => json())
            .then(json => setProducts(json))
    }, [])

    return (
        <>
            <div>
                {products && products.map((e, i) => (
                    <div key={i}>
                        <img src={e.image} />
                        <h3>{e.title}</h3>
                        <p>{e.price}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Effect2;
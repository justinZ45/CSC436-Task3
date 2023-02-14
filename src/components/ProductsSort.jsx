import products from "./Products";

import { useState, useEffect } from "react";

const ProductsSort = () => {

  const [newProducts, setNewProducts] = useState([]); //new variable to hold names of sorted products
   
    useEffect(() => {
        sortProducts();  //sort right away
    }, [])

    const sortProducts = () => {
 
        products.sort((a, b) => a.price - b.price);  //ascending order

      setNewProducts(products.map(a => a.name)); //fill with sorted names

    }

    return <div>
        <h3>Products by Ascending Price:</h3> 
        <p>{newProducts.join(',  ')}</p>
    </div>
}

export default ProductsSort;
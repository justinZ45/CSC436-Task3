import products from "./Products";


const ProductsFilter = () => {
  
    //filter product based on whether "onSale" bool is true
    return <ol>
        {
             <div >
             <p> Products that are on sale are: </p>
       
            {products.filter( product => product.onSale == true ).map(({id, name}) => <li key={id}>{name}</li>)}
            </div>
        }
    </ol>
} 

export default ProductsFilter;
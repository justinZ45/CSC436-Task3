import products from "./Products";


const ProductsReduce = () => {


    const totalPrice = products.reduce((accumulator, product) => {  //add up all product prices
        return accumulator + product.price;
    }, 0);

    const productNames = products.reduce((accumulator, product, i, products) => { //obtain names of products
        return `
            ${accumulator}
            ${i === 0 ? '' : ', '}
            ${i === product.length - 1 ? 'and ' : ''}
            ${product.name}`;
    }, '');


    return  <div>
                <p className="text-center">Total Price of Products is : ${totalPrice}.</p>
                <p className="text-center">The products are {productNames}</p>
            </div>
}

export default ProductsReduce;
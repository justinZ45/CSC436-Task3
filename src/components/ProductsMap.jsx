import products from "./Products";

const ProductsMap = () => {
    return <div className="cards">
        {products.map((product) => { //iterate and return name of each product
            const {
                name
            } = product;

            return <div key={`${name}`} className="cards--card"> 
                <div className="cards--text-content">
                    <p className="cards--name">{name}</p>
                </div>
            </div>
        })}

    </div>
}

export default ProductsMap;
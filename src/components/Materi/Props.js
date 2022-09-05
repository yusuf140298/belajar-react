const Props = ({product,deleteProduct}) => {
    return ( 
        <ul>
            {product.map((products) => (
                <li key={products.id}>{products.title} - {products.price} <button onClick={() => deleteProduct(products.id)}>Delete</button></li>
            )
            )}
        </ul>
     );
}
 
export default Props;
import { useState } from "react";
import Props from "./Props";

const LoopingList = () => {

    const [product, setProduct] = useState([
        {
            id: 1, title: 'product1', price: 'Rp.30000'
        },
        {
            id: 2, title: 'product2', price: 'Rp.40000'
        },
        {
            id: 3, title: 'product3', price: 'Rp.35000'
        },
        {
            id: 4, title: 'product4', price: 'Rp.37000'
        },
        {
            id: 5, title: 'product5', price: 'Rp.32000'
        }
    ])

    const deleteProduct = (productId) => {
        const newProduct = product.filter(product => product.id !== productId)
        setProduct(newProduct)
    }
    return ( 
        <div>
            <Props product = {product} deleteProduct = {deleteProduct}/>
        </div>
     );
}
 
export default LoopingList;
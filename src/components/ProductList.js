import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
// useState
    const [Product, setProduct] = useState([]);
// useEffect
    useEffect(() =>{
        fetchData();
    },[])
//fetchData
    const fetchData = async() =>{
        const respone =await fetch('http://localhost:8080/products')
        const data =await respone.json()
        setProduct(data)
    }
// delete product
    const deleteProduct = async(id) =>{
        await fetch(`http://localhost:8080/products/${id}`,{
            method: "DELETE",
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        fetchData();
    }
    return ( 
        <div>
            <Link to="/add" className="button is-primary mt-5">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <th>No</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {Product.map((Product, index) =>(
                        <tr key={Product.id}>
                            <td>{index+1}</td>
                            <td>{Product.title}</td>
                            <td>{Product.Kelas}</td>
                            <td>
                                <Link to={`/edit/${Product.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={()=>deleteProduct(Product.id)} className="button is-small is-danger">Hapus</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default ProductList;
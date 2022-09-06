import { createBrowserHistory } from "history";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {
    const [title, setTitle] = useState('')
    const [Kelas, setKelas] = useState('')
    const history = createBrowserHistory()
    const {id} = useParams();

    useEffect(() =>{
        getProductById();
    },[])

    const getProductById = async() => {
        const respone = await fetch(`http://localhost:8080/products/${id}`)
        const data = await respone.json()
        setTitle(data.title)
        setKelas(data.Kelas)
    }

    const updateProduct = async(e) =>{
        e.preventDefault();
        const product = {title,Kelas}
        await fetch(`http://localhost:8080/products/${id}`,{
            method: "PUT",
            body: JSON.stringify(product),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        history.push("/")
    }
    return ( 
        <div>
            <form onSubmit={updateProduct}>
                <div className="field">
                    <label className="label">Nama</label>
                    <div className="control">
                        <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Masukan Nama"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Kelas</label>
                    <div className="control">
                        <input className="input" value={Kelas} onChange={(e) => setKelas(e.target.value)} type="text" placeholder="Masukan Kelas"/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-prymary">Update</button>
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default EditProduct;
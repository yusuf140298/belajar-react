import { useState } from "react";
import { createBrowserHistory } from "history";

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [Kelas, setKelas] = useState('');
    const history = createBrowserHistory()

    const saveProduct = async(e) => {
        e.preventDefault();
        const product = { title, Kelas };
        await fetch('http://localhost:8080/products',{
            method: "POST",
            body: JSON.stringify(product),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        history.push("/productlist");
    }
    return ( 
        <div>
            <form onSubmit={saveProduct}>
                <div className="field">
                    <label className="label">Nama</label>
                    <div className="control">
                        <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Masukan Nama"></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Kelas</label>
                    <div className="control">
                        <input className="input" value={Kelas} onChange={(e) => setKelas(e.target.value)} type="text" placeholder="Masukan Nama"></input>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-primary">Save</button>
                    </div>
                </div>
            </form>
        </div>    
     );
}
 
export default AddProduct;
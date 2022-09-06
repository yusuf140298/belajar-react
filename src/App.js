
import ClickEvent from "./components/Materi/ClickEvent";
import Component from "./components/Materi/Component";
import LoopingList from "./components/Materi/LoopingList";
import UseState from "./components/Materi/UseState";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";


function App() {

  // output dinamic whileyou
  const Nama ="Saya Yusuf Dinamic"
  // penggunaan useEffect
  const [name, setName] = useState('Bagus Pratama')
  useEffect(()=>{
    console.log("useEffect");
  }, [name])
  return (
    <div>
      <button onClick={() => setName('Jokowi')}>Presiden Kita</button>
      <p>{name}</p>
      <h2>nama ku adalah yusuf</h2>
      <h2>{Nama}</h2>
      <ClickEvent />
      <UseState />
          <Router>
              <Routes>
                <Route exact path="/" element={<LoopingList/>} />
                <Route path="element" element={<Component/>} />
                <Route path="productlist" element={<ProductList/>} />
                <Route path="add" element={<AddProduct/>} />
                <Route path="edit/:id" element={<EditProduct/>} />
              </Routes>
          </Router>
     </div>
  );
}

export default App;

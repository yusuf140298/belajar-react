import { useState } from "react"


const UseState = () => {
    const [title,  setTitle] = useState("Saya Adalah Yusuf")
// 
    const ChangeTitle = () =>{
        setTitle ("Saya Berubah menjadi bagus")
      }
    return ( 
        <div>     
       <h3>{title}</h3>
       <button onClick={ChangeTitle}>Nama Saya Yusuf</button>
        </div>
     )
}
 
export default UseState;
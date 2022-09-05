
import ClickEvent from "./components/Materi/ClickEvent";
import Component from "./components/Materi/Component";
import LoopingList from "./components/Materi/LoopingList";
import UseState from "./components/Materi/UseState";


function App() {

  // output dinamic whileyou

  
  const Nama ="Saya Yusuf Dinamic"
  return (
    <div>
      <h2>nama ku adalah yusuf</h2>
      <h2>{Nama}</h2>
      <Component />
      <ClickEvent />
      <UseState />
      <LoopingList />      
     </div>
  );
}

export default App;

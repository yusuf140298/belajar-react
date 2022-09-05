const ClickEvent = () => {
    const Name = (saya) =>{
        console.log("Nama Saya adalah "+ saya);
      }
    return ( 
        <button onClick={()=> Name('Yusuf')}>Click Me</button>
     );
}
 
export default ClickEvent;
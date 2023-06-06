export function Modal(props) {

  // console.log(props.items)
  // console.log(props.items[0])

  return (
    <div>
      
      <p>testing</p>
      {/* {props.items && */}
      {props.items.map((item) => {
        <p>xxx
          {console.log(item)}
          {item.id} in Menge 

        </p>
        // <br/>


        
        
        
      })}
        
    </div>
  );
}

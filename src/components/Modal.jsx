export function Modal(props) {

  // console.log(props.items)

  return (
    <div>
      
      {props.items &&
      props.items.map((item) => {
        return <p>
          {/* {console.log(item)} */}
          {item.id} in Menge {item.quantity}
      
        </p>
               
        
        
      })}
        
    </div>
  );
}

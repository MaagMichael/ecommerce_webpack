import { useShoppingCart } from "../context/ShoppingCartContext";


export function Modal2() {

  const { cartItems, cartQuantity } = useShoppingCart();
  
  // console.log("cartitems:" , cartItems)

  return (
    <div>
      {cartItems &&
          cartItems
          .sort((a, b) => a.id - b.id)
          .map((item) => {
            return <p>{item.id} with {item.quantity}</p>
            // {console.log("item", item.id)}
          })}
       
        
        
     
        
    </div>
  );
}

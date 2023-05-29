import storeItems from "../data/items.json";
// import {useShoppingCart} from "./context/ShoppingCartContext"

export function Store() {

  // const {getItemQuantity,
  //   increaseCartQuantity,
  //   decreaseCartQuantity,
  //   removeFromCart} = useShoppingCart();

  // const quantity = getItemQuantity(id);
  const quantity = 1;

  return (
    <div className="card_section">
      {storeItems &&
        storeItems.map((item) => {
          return (
            <div
              key={item.id}
              className="card_container"
              // take object by id(key) of picked item
              // onClick={() => alert("You clicked ID " + item.id)}
            >
              {/* images from URL */}
              <img src={item.imgUrl} className="card_image" alt="item" />

              <div className="card_overlay">
                <span>{item.name}</span> <span>{item.price}</span>
              </div>

            {/* conditional rendering depending on item quantity in cart - no show when 0 */}
              {quantity === 0 ? (
                <button
                  className="card_button"
                  onClick={() => alert("You clicked button Order of id: " + item.id)}
                >
                  Order here{" "}
                </button>
              ) : (
                <div className="card_order">
                  <div>
                    <button onClick={() => alert("You clicked button - of id: " + item.id)}>-</button>
                    <span> {quantity} in cart </span>
                    <button onClick={() => alert("You clicked button + of id: " + item.id)}>+</button>
                  </div>
                  <div>
                    <button>Remove</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}

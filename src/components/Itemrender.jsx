import { useShoppingCart } from "../context/ShoppingCartContext";

export function Itemrender(item) {
  // console.log(item);
  

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(item.id);

  return (
    <div
      // take object by id(key) of picked item
      key={item.id}
      className="card_container"
    >
      {/* images from URL */}
      <img
        src={item.imgUrl}
        className="card_image"
        alt="item"
        onClick={() => alert("You clicked picture of ID " + item.id)}
      />

      <div className="card_overlay">
        <span>{item.name}</span> <span>{item.price}</span>
      </div>

      {/* conditional rendering depending on item quantity in cart - no show when 0 */}
      {quantity === 0 ? (
        <button
          className="card_button"
          // onClick={() => alert("You clicked button Order of id: " + item.id)}
          onClick={() => increaseCartQuantity(item.id) }
        >
          Order here{" "}
        </button>
      ) : (
        <div className="card_order">
          <div>
            <button
              onClick={() => decreaseCartQuantity(item.id)}
            >
              -
            </button>
            <span> {quantity} in cart </span>
            <button
              onClick={() => increaseCartQuantity(item.id)}
            >
              +
            </button>
          </div>
          <div>
            <button
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

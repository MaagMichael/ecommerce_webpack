import storeItems from "../data/items.json";
import { Itemrender } from "./Itemrender";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Modal } from "./Modal";
import { Modal2 } from "./Modal2";

export function Store() {
  const { isOpen, cartItems, cartQuantity } = useShoppingCart();

  return (
    <div>
      <div>
        {isOpen ? <p>Your orders are:</p> : null}
        {isOpen ? <Modal items={cartItems} /> : null}
        {isOpen ? <Modal2 /> : null}
      </div>
      <div className="card_section">
        {storeItems &&
          storeItems.map((item) => {
            return <Itemrender {...item} />;
          })}
      </div>
    </div>
  );
}

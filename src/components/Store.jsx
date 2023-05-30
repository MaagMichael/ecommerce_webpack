import storeItems from "../data/items.json";
import {Itemrender} from "./Itemrender";

export function Store() {
  return (
    <div className="card_section">
      {storeItems &&
        storeItems.map((item) => {
          return <Itemrender {...item} />;
        })}
    </div>
  );
}

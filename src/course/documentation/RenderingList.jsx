import { products } from "../constant/products";

const RenderingList = () => {
  const listItem = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkblue",
      }}
    >
      {product.title}
    </li>
  ));

  return (
    <div>
      <ul>{listItem}</ul>
    </div>
  );
};

export default RenderingList;

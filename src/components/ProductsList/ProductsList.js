import { useStore } from "../../hooks-store/store";

const ProductsList = ({ products }) => {
  const [state, dispatch] = useStore();

  const handleClick = (id) => {
    dispatch("TOGGLE_FAV", id);
  };

  return (
    <ul>
      {state.products.map((prod) => {
        return (
          <li key={prod.id} onClick={() => handleClick(prod.id)}>
            {prod.title} {"-->"} {String(prod.isFavorite)}
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsList;

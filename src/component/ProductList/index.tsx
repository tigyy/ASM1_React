import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: any) => state.products);
  console.log(products);

  //GET
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`http://localhost:3000/product`);
      dispatch({ type: "GET", payload: data });
    };
    fetchProducts();
  }, []);

  //ADD
  const addProduct = async (product: any) => {
    const { data } = await axios.post(`http://localhost:3000/product`, product);
    dispatch({ type: "POST", payload: data });
  };

  //PUT
  const updateProduct = async (product: any) => {
    const { data } = await axios.put(
      `http://localhost:3000/product/` + product.id,
      product
    );
    dispatch({ type: "PUT", payload: data });
  };

  //DELETE
  const deleteProduct = async ({ id }: any) => {
    await axios.delete(`http://localhost:3000/product/` + id);
    dispatch({ type: "DELETE", payload: { id } });
  };

  return (
    <div>
      <button onClick={() => addProduct({ name: "Product New" })}>Add</button>
      {products?.map((item: any) => (
        <div className="flex" key={item.id}>
          <h2 className="p-2 text-pink-500">{item.name}</h2>
          <button
            className="p-2 text-blue-500"
            onClick={() =>
              updateProduct({ name: "Product Update", id: item.id })
            }
          >
            Update
          </button>
          <button
            className="p-2 text-red-500"
            onClick={() => deleteProduct({ id: item.id })}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

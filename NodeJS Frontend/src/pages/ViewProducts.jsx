import axios from "axios";
import { useState, useEffect } from "react";
/**
 * @description Page for viewing products
 * @returns { Component }
 */
function ViewProducts() {
  /**
   * State for data and loading
   */
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * Fetch data from the server
   */
  useEffect(() => {
    axios.get("http://localhost:3003/products").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  /**
   * Styles for the page
   */
  const styles = {
    body_loading:
      "bg-blue-950 text-white font-bold flex items-center justify-center min-h-[100vh]",
    body: "min-h-[100vh] bg-blue-950 text-white px-8 py-12 flex flex-col gap-8",
    div_top: "flex justify-between items-center",
    button_create:
      "bg-blue-700  px-4 py-1 rounded-[15px] hover:bg-white hover:text-blue-700 transition-all duration-500",
    grid_products: "grid grid-cols-1 lg:grid-cols-3 gap-8",
    card: "bg-blue-700 rounded-[25px] flex flex-col gap-8 p-8",
    card_img: "rounded-[25px] max-h-[160px] object-cover object-top",
  };

  /**
   * Check if the data is still loading
   */
  if (loading) {
    return <div className={styles.body_loading}>Loading...</div>;
  }

  /**
   * Return the page
   */
  return (
    <div className={styles.body}>
      <div className={styles.div_top}>
        <h1 className="font-bold text-4xl">Products</h1>
        <button className={styles.button_create}>Create</button>
      </div>
      <ul className={styles.grid_products}>
        {data &&
          data.docs.map((product) => (
            <li className={styles.card} key={product._id}>
              <img
                className={styles.card_img}
                src={
                  product.image
                    ? product.image
                    : "https://w7.pngwing.com/pngs/427/263/png-transparent-cleaning-products.png"
                }
                alt={product.name}
              />
              <h2 className="font-semibold text-2xl">{product.name}</h2>
              <p>{product.description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ViewProducts;

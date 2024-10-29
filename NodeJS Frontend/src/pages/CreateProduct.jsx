import { useState } from "react";
import axios from "axios";

function CreateProduct() {
  const [data, setData] = useState({
    image: {
      value: null,
      error: "",
    },
    name: {
      value: "",
      error: "",
    },
    price: {
      value: "",
      error: "",
    },
    stock: {
      value: "",
      error: "",
    },
    description: {
      value: "",
      error: "",
    },
    free_shipping: {
      value: false,
      error: "",
    },
  });

  const styles = {
    body: "min-h-[100vh] bg-blue-950 text-white px-8 py-12 flex flex-col gap-8",
    button_back:
      "bg-blue-700 px-4 py-1 rounded-[15px] hover:bg-white hover:text-blue-700 transition-all duration-500",
    button_create:
      "bg-white text-blue-700 px-4 py-1 rounded-[15px] hover:bg-blue-400 hover:text-white transition-all duration-500",
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: {
        ...prevData[name],
        value:
          type === "file" ? files[0] : type === "checkbox" ? checked : value,
        error: "",
      },
    }));
  };

  const createProduct = async (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("image", data.image.value);
      formData.append("name", data.name.value);
      formData.append("price", data.price.value);
      formData.append("stock", data.stock.value);
      formData.append("description", data.description.value);
      formData.append(
        "free_shipping",
        data.free_shipping.value ? "true" : "false"
      );
      try {
        await axios.post("http://localhost:3003/products", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Product created");
      } catch (error) {
        alert(`An error occurred: ${error.message}`);
      }
    }
  };

  const validate = () => {
    let isValid = true;

    if (data.image.value) {
      if (
        !["image/jpeg", "image/jpg", "image/png", "image/gif"].includes(
          data.image.value.type
        )
      ) {
        console.log(data.image.value);
        isValid = false;
        setData((prevData) => ({
          ...prevData,
          image: { ...prevData.image, error: "Invalid image type" },
        }));
      }
    }

    if (data.name.value === "") {
      isValid = false;
      setData((prevData) => ({
        ...prevData,
        name: { ...prevData.name, error: "Name is required" },
      }));
    } else if (!/^[a-zA-Z0-9 ]+$/.test(data.name.value)) {
      isValid = false;
      setData((prevData) => ({
        ...prevData,
        name: {
          ...prevData.name,
          error: "Name must contain only letters and numbers",
        },
      }));
    }

    if (data.price.value === "") {
      isValid = false;
      setData((prevData) => ({
        ...prevData,
        price: { ...prevData.price, error: "Price is required" },
      }));
    } else if (isNaN(data.price.value)) {
      isValid = false;
      setData((prevData) => ({
        ...prevData,
        price: { ...prevData.price, error: "Price must be a number" },
      }));
    } else if (data.price.value < 0) {
      isValid = false;
      setData((prevData) => ({
        ...prevData,
        price: { ...prevData.price, error: "Price must be greater than 0" },
      }));
    }

    if (data.stock.value === "") {
      isValid = false;
      setData((prevData) => ({
        ...prevData,
        stock: { ...prevData.stock, error: "Stock is required" },
      }));
    } else if (isNaN(data.stock.value)) {
      isValid = false;
      setData((prevData) => ({
        ...prevData,
        stock: { ...prevData.stock, error: "Stock must be a number" },
      }));
    } else if (data.stock.value < 0) {
      isValid = false;
      setData((prevData) => ({
        ...prevData,
        stock: { ...prevData.stock, error: "Stock must be greater than 0" },
      }));
    }

    if (data.description.value === "") {
      isValid = false;
      setData((prevData) => ({
        ...prevData,
        description: {
          ...prevData.description,
          error: "Description is required",
        },
      }));
    }

    return isValid;
  };

  return (
    <div className={styles.body}>
      <div className="flex justify-end">
        <button className={styles.button_back}>Back</button>
      </div>
      <h1 className="text-center text-3xl font-semibold">Create product</h1>
      <form
        method="POST"
        className="py-8 px-4 flex flex-col gap-8 items-center bg-blue-700 rounded-[15px]"
        onSubmit={createProduct}
      >
        <div className="flex flex-col gap-4 w-[80%]">
          <label htmlFor="image">Image</label>
          <input
            className="text-gray-800"
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
          />
          {data.image.error && (
            <span className="text-red-500">{data.image.error}</span>
          )}
        </div>
        <div className="flex flex-col gap-4 w-[80%]">
          <label htmlFor="name">Name</label>
          <input
            className="text-gray-800"
            type="text"
            id="name"
            name="name"
            value={data.name.value}
            onChange={handleChange}
          />
          {data.name.error && (
            <span className="text-red-500">{data.name.error}</span>
          )}
        </div>
        <div className="flex flex-col gap-4 w-[80%]">
          <label htmlFor="price">Price</label>
          <input
            className="text-gray-800"
            type="text"
            id="price"
            name="price"
            value={data.price.value}
            onChange={handleChange}
          />
          {data.price.error && (
            <span className="text-red-500">{data.price.error}</span>
          )}
        </div>
        <div className="flex flex-col gap-4 w-[80%]">
          <label htmlFor="stock">Stock</label>
          <input
            className="text-gray-800"
            type="text"
            id="stock"
            name="stock"
            value={data.stock.value}
            onChange={handleChange}
          />
          {data.stock.error && (
            <span className="text-red-500">{data.stock.error}</span>
          )}
        </div>
        <div className="flex flex-col gap-4 w-[80%]">
          <label htmlFor="description">Description</label>
          <textarea
            className="text-gray-800"
            id="description"
            name="description"
            value={data.description.value}
            onChange={handleChange}
          />
          {data.description.error && (
            <span className="text-red-500">{data.description.error}</span>
          )}
        </div>
        <div className="flex flex-col items-start gap-4 w-[80%]">
          <label htmlFor="free_shipping">Free shipping</label>
          <input
            className="text-gray-800"
            type="checkbox"
            id="free_shipping"
            name="free_shipping"
            checked={data.free_shipping.value}
            onChange={handleChange}
          />
        </div>
        <button className={styles.button_create}>Create</button>
      </form>
    </div>
  );
}

export default CreateProduct;

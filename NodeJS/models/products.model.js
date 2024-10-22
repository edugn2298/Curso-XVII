import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
/**
 * Schema for products
 *@typedef {Object} productSchema
 *@property {string} name - The name of the product
 *@property {string} description - The description of the product
 *@property {number} price - The price of the product
 *@property {number} stock - The stock of the product
 *@property {string} image - The image of the product
 *@property {boolean} free_shipping - The free shipping of the product
 *@property {Date} createdAt - The date of creation of the product
 *@property {Date} updatedAt - The date of update of the product
 */

// Definir un schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      validate: /^[a-zA-Z0-9 ]+$/,
      unique: true,
    },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    image: { type: String },
    free_shipping: { type: Boolean, default: false },
  },
  { timestamps: true }
);
productSchema.plugin(mongoosePaginate);
/**
 * Model for products
 * @typeof {Object} Product
 */

const Product = mongoose.model("Product", productSchema);
export { Product };
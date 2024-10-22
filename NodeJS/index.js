import express, { json } from "express"; //importamos express
import mongoose from "mongoose";
const app = express(); // Crear el servidor ejecutando express
const port = 3001; //crear un puerto
app.use(json()); // Middleware para parsear JSON
// Utilizar mongoose para conectarnos a MongoDB
connectDB().catch((err) => console.log(err));

async function connectDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/api");
}

//iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

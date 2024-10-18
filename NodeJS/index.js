import express, { json } from "express"; //importamos express
const app = express(); // Crear el servidor ejecutando express
const port = 3001; //crear un puerto
app.use(json()); // Middleware para parsear JSON
// Ruta principal
app.get("/", (req, res) => {
  res.send("Bienvenido a la API con Express");
});
app.get("/productos", (req, res) => {
  res.json([
    {
      id: 1,
      nombre: "Producto 1",
      precio: 100,
    },
    {
      id: 2,
      nombre: "Producto 2",
      precio: 200,
    },
  ]);
});
//Ruta con params
app.get("/productos/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    id,
    nombre: `Producto ${id}`,
    precio: 100 * id,
  });
});
//Ruta con query params
app.get("/mensajes", (req, res) => {
  const { nombre, apellido } = req.query;
  res.json(`Hola ${nombre} ${apellido}`);
});

//iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

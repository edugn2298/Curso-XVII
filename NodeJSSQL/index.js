const mysql = require("mysql");
const express = require("express");
const app = express();
const port = 3002;

app.use(express.json()); // Middleware para parsear JSON

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "prueba",
});

db.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err.stack);
    return;
  }
  console.log("Conectado a la base de datos con id", db.threadId);
});

// Ruta de prueba para verificar la conexión a la base de datos
app.get("/api/test", (req, res) => {
  db.query("SELECT 1 + 1 AS solution", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ solution: results[0].solution });
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Ruta de prueba para verificar la conexión a la base de datos
app.get('/', (req, res) => {
  res.send('Bienvenido a la página principal');
});

//Ruta para mostrar todos los usuarios
app.get('/users', (req, res) => {
  try {
    const sql = "SELECT * FROM usuarios";
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

//Ruta para mostrar un usuario en particular
app.get('/users/:id', (req, res) => {
  try {
    const sql = "SELECT * FROM usuarios WHERE Id = ?";
    const values = [req.params.id];
    db.query(sql, values, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.json(results[0]);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

//Ruta para crear un usuario
app.post('/users', (req, res) => {
  try {
    const sql = "INSERT INTO usuarios (nombre, apellido) VALUES (?, ?)";
    const values = [req.body.nombre, req.body.apellido];
    db.query(sql, values, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Usuario creado correctamente' });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

//Ruta para actualizar un usuario
app.patch('/users/:id', (req, res) => {
  try {
    const sql = "UPDATE usuarios SET nombre = ?, apellido = ? WHERE Id = ?";
    const values = [req.body.nombre, req.body.apellido, req.params.id];
    db.query(sql, values, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.json({ message: 'Usuario actualizado correctamente' });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

//Ruta para eliminar un usuario
app.delete('/users/:id', (req, res) => {
  try {
    const sql = "DELETE FROM usuarios WHERE Id = ?";
    const values = [req.params.id];
    db.query(sql, values, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.json({ message: 'Usuario eliminado correctamente' });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})
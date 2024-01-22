const express = require("express"); // Es necesario primero requerir a expres antes de llamarlo 
const app = express(); // en esta constante
const cors = require("cors");
// const mysql = require("mysql");
const { Pool } = require("pg");
const config = require("./config.js");

app.use(cors());
app.use(express.json());

// const db = mysql.createConnection({
//     host: config.HOST,
//     user: config.USER,
//     password: config.PASSWORD,
//     database: config.NAME
// });

const pool = new Pool({
    user: config.USER,
    host: config.HOST,
    database: config.NAME,
    password: config.PASSWORD,
    port: config.PORT
});

// app.post("/post", (req,res) => {
//     const resultado = req.body.resultado;

//     db.query('INSERT INTO operaciones(operacion) VALUES (?)', [resultado],
//     (err,result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send("Registro exitoso");
//             console.log("Registro exitoso");
//         }
//     }
//     );

// });

app.post("/post", (req, res) => {
    const resultado = req.body.resultado;
  
    // Usamos $1 como marcador de posición para evitar SQL injection
    pool.query("INSERT INTO operaciones(operacion) VALUES ($1)", [resultado], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error en el servidor");
      } else {
        res.send("Registro exitoso");
        console.log("Registro exitoso");
      }
    });
  });

// app.get("/get", (req,res) => {

//     db.query('SELECT * FROM operaciones',
//     (err,result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     }
//     );

// });

app.get("/get", (req, res) => {
    // No necesitas cerrar la conexión en el entorno de Pool
    pool.query("SELECT * FROM operaciones", (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error en el servidor");
      } else {
        res.send(result.rows);
      }
    });
  });

// app.listen(3001, () => {
//     console.log("Corriendo en el puerto 3001");
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
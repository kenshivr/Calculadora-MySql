const express = require("express"); // Es necesario primero requerir a expres antes de llamarlo 
const app = express(); // en esta constante
const cors = require("cors");
const mysql = require("mysql");
const config = require("./config.js");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.NAME
});

app.post("/create", (req,res) => {
    const resultado = req.body.resultado;

    db.query('INSERT INTO operaciones(operacion) VALUES (?)', [resultado],
    (err,result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Registro exitoso");
            console.log("Registro exitoso");
        }
    }
    );

    // db.end();
});

// app.get("/empleados", (req,res) => {

//     db.query('SELECT * FROM empleados',
//     (err,result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     }
//     );

//     // db.end();
// });

// app.put("/update", (req,res) => {
//     const id = req.body.id;
//     const nombre = req.body.nombre;
//     const edad = req.body.edad;
//     const pais = req.body.pais;
//     const cargo = req.body.cargo;
//     const anios = req.body.anios;

//     db.query('UPDATE empleados SET nombre=?, edad=?, pais=?, cargo=?, anios=? WHERE id = ?', [nombre,edad,pais,cargo,anios, id],
//     (err,result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     }
//     );

//     // db.end();
// });

// app.delete("/delete/:id", (req,res) => {
//     const id = req.params.id;

//     db.query('DELETE FROM empleados WHERE id = ?', id,
//     (err,result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     }
//     );

//     // db.end();
// });

app.listen(3001, () => {
    console.log("Corriendo en el puerto 3001");
});
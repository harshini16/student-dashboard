const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'student'
})
app.get('/' , (re, res) => {
    return res.json("From Backend Side");
})
// New endpoint to fetch student details
app.get('/student_details', (req, res) => {
    const sql = "SELECT * FROM student_details WHERE prn=2"; // Adjust the query as needed
    db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  });

//Existing end point to fetch hostel room status details
app.get('/hostel_room',(req, res) =>{
    const sql = "SELECT * FROM hostel_room WHERE prn=2";
    db.query(sql, (err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("listening");
})
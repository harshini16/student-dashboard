const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'student'
})
app.get('/' , (req, res) => {
    return res.json("From Backend Side");
})

//login-database link
app.post('/login', (req,res)=> {
    const {email, password} = req.body;
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    
    db.query(sql, [email, password], (err,data) => {
        if(err) return res.json("Fail!");
        if (data.length>0) {
            return res.json("Login Successfull");
        } else {
            return res.json("No Record.");
        }
    });
});

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

app.get('/student_marks', (req, res) => {
    const sql = "SELECT subject1_marks, subject2_marks, subject3_marks, subject4_marks, subject5_marks, subject6_marks FROM student_marks WHERE prn=2";
    db.query(sql, (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json(data);
    });
  });

app.get('/student_attendance', (req, res) => {
    const sql = "SELECT subject1_attendance, subject2_attendance, subject3_attendance, subject4_attendance, subject5_attendance, subject6_attendance FROM student_attendance WHERE prn=2";
    db.query(sql, (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json(data);
    });
  });

app.listen(8081, () => {
    console.log("listening");
})
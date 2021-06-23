var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Naomi@2021",
  database: "bank"
  
})
con.connect(function(err) {
  if (err) throw err;
      con.query("SELECT name FROM accounts ", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
}); 
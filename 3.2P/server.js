var express = require("express")
const path = require('path'); 
var app = express()
var port = process.env.port || 3003;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended:false}));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
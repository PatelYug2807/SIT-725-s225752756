var express = require("express")
const path = require('path'); // Make sure to include this
var app = express()
var port = process.env.port || 3003;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// GET endpoint to calculate the square of a number
// Example: http://localhost:3000/square?num=5
app.get('/square', (req, res) => {
  const num = parseFloat(req.query.num);
  
  if (isNaN(num)) {
    return res.send("Error: Please provide a valid number using query parameter 'num'.");
  }
  
  const square = num * num;
  res.send(`The square of ${num} is: ${square}`);
});

app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  
  if (isNaN(num1) || isNaN(num2)) {
    return res.send("Error: Please provide a valid number using query parameter 'num'.");
  }
  
  const addition = num1 + num2;
  res.send(`The Addition of ${num1} and ${num2} is: ${addition}`);
});

app.get('/subtract', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  
  if (isNaN(num1) || isNaN(num2)) {
    return res.send("Error: Please provide a valid number using query parameter 'num'.");
  }
  
  const subracrtion = num1 - num2;
  res.send(`The Subraction of ${num2} from ${num1} is: ${subracrtion}`);
});

app.get('/multiply', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  
  if (isNaN(num1) || isNaN(num2)) {
    return res.send("Error: Please provide a valid number using query parameter 'num'.");
  }
  
  const mul = num1 * num2;
  res.send(`The multiplication of ${num1} and ${num2} is: ${mul}`);
});

app.get('/divide', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  
  if (isNaN(num1) || isNaN(num2)) {
    return res.send("Error: Please provide a valid number using query parameter 'num'.");
  }
  if (num2==0)
  {
    return res.send("Error: Cannot divide by zero.");
  }
  
  const divide = num1 / num2;
  res.send(`The Division of ${num1} by ${num2} is: ${divide}`);
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
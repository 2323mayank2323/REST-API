const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data;
    const user_id = "Aditya_singh_16122002";
    const email = "aditya0100.be21@chitkara.edu.in";
    const roll_number = "2110990100";

    const odd_numbers = data.filter(
      (num) => num % 2 !== 0 && isNaN(num) === false
    );
    const even_numbers = data.filter(
      (num) => num % 2 === 0 && isNaN(num) === false
    );
    const alphabets = data
      .filter((char) => isNaN(parseInt(char)) === true)
      .map((char) => char.toUpperCase());

    console.log(odd_numbers);

    res.json({
      is_success: true,
      user_id: user_id,
      email: email,
      roll_number: roll_number,
      odd_numbers: odd_numbers,
      even_numbers: even_numbers,
      alphabets: alphabets,
    });
  } catch (error) {
    console.log(error);
    res.json({
      is_success: false,
      user_id: user_id,
      email: email,
      roll_number: roll_number,
      odd_numbers: odd_numbers,
      even_numbers: even_numbers,
      alphabets: alphabets,
    });
  }
});

// Host API on localhost:8080
app.listen(8080, () => {
  console.log("Server running on port 8080");
});

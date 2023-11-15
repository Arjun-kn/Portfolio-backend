let express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
let router = require("./routes/portfolio.js");
dotenv.config();

let app = express();

// rest object

// middleware
// Add this line to your server code
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

// static files


// routes
app.use("/api/v1/portfolio", router);


//port

const PORT = process.env.PORT || 8080;

//server-listen

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});

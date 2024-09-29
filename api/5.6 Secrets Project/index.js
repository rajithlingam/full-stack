import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

const API_URL = "https://secrets-api.appbrewery.com/random";

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

    app.get("/", async (req, res) => {
        
        try {
          const result = await axios.get(API_URL);
          res.render("index.ejs", { secret: JSON.stringify(result.data.secret), user: JSON.stringify(result.data.username) });
        } catch (error) {
          res.render("index.ejs", { secret: JSON.stringify(error.response.data), user: JSON.stringify(error.response.data) });
        }
      });

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
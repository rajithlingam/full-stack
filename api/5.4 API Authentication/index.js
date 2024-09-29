import express from "express";
import axios, { AxiosHeaders } from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "rajithlingam_RL";
const yourPassword = "nopw@!#2.rl";
const yourAPIKey = "62147cf9-18a2-4f2b-90b8-fa202fd1dcd2";
const yourBearerToken = "fb4dffa2-678c-471b-a1e6-d8354bfdfbde";

app.get("/", (req, res) => {
  res.render( "index.ejs", { content: "API Response." } );
});

app.get("/noAuth", async (req , res) => {

  try {
    const response = await axios.get(API_URL + "random");
    const result = JSON.stringify(response.data);

    console.log( result + "  .  over&&out  .  ");
    res.render("index.ejs", { content : result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", { error: error.message } );

  }

});

app.get("/basicAuth", async (req, res) => {

  try {
    const response = await axios.get(API_URL + "all?page=2",{ auth : { username : yourUsername, password : yourPassword } } );
    const result = JSON.stringify(response.data);

    console.log( result + "  .  over&&out  .  ");

    res.render("index.ejs", { content : result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }

});

app.get("/apiKey", async (req, res) => {

  try {
    const response = await axios.get(API_URL + "filter?score=6&apiKey=" + yourAPIKey );
    const result = JSON.stringify(response.data);

    console.log( result + "  .  over&&out  .  ");

    res.render("index.ejs", { content : result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", { error: error.message } );

  } 

});

app.get("/bearerToken", async (req, res) => {

  try {
    const response = await axios.get(API_URL + "secrets/42", {headers:{Authorization: `Bearer ${yourBearerToken}`}} );
    const result = JSON.stringify(response.data);

    console.log( result + "  .  over&&out  .  ");

    res.render("index.ejs", { content : result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", { error: error.message } );

  } 

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
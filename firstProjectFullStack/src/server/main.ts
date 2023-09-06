import express from "express";
import ViteExpress from "vite-express";
import "dotenv/config"
import fs from "fs-extra"

const app = express();
const port = parseInt(process.env.PORT as string)

app.get('/hello/:nom', (req, res) => {
  const name = req.params.nom
   
  console.log(name);
  res.send("Bonjour "+ name);
});

ViteExpress.listen(app, port, () =>
  console.log("Server is listening on port " + port + "...")
);


const data: string[] = fs.readJsonSync('./hellos.json')
data.push("fdsmlfds")
fs.writeJsonSync('./hellos.json', data)
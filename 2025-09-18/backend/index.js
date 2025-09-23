const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Chalk marks under the bridge");
});

app.post("/", (req, res) => {
    res.send("A new rock in the park, under the willow tree")
})

app.put("/", (req, res) => {
    res.send("The codes no longer work")
})

app.delete("/", (req, res) => {
    res.send("I have been made reduntant")
})

app.get('/monkies/:monkeyId/zoo/:zooId/city/:name', (req, res) => {
  res.send(req.params)
})

app.get('/birdMigration/:from/:stop/:to', (req, res) => {
  res.send(req.params)
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
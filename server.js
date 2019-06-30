const express = require("express");
const path = require("path");

const neo4j = require("neo4j-driver").v1;
const index = require("./routes/index");

const app = express();
const port = process.env.PORT || 5000;
var testAPIRouter = require("./api");

const driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "admin"));
const session = driver.session();
// API calls

app.use("/api", index);
app.get("*", (req, res) => {
  res.sendFile("/public/index.html", { root: global });
});

// app.get("/testAPI", testAPIRouter);
// app.get("/users", (req, res) => {
//   console.log("yassine");
//   session
//     .run("MATCH (n:Artist) RETURN n")
//     .then(response => {
//       response.records.map(artist => {
//         console.log("res: " + JSON.stringify(artist._fields));
//       });
//       res.json({ data: "tj" });
//       res.render(path.join(__dirname, "/public/index.html"), { data: "Hello From Express" });
//     })
//     .catch(error => console.log("error" + JSON.stringify(error)));
// });

// if (process.env.NODE_ENV === "production") {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, "public")));

//   // Handle React routing, return all requests to React app
//   app.get("*", (req, res) => {
//     session
//       .run("MATCH (n:Artist) RETURN n")
//       .then(res => {
//         // console.log("res: " + JSON.stringify(res.records._fields[0]));
//       })
//       .catch(error => console.log("error" + JSON.stringify(error)));
//     res.sendFile(path.join(__dirname, "/public/index.html"));
//   });
// }

// Create
// session.run("CREATE (a:Person {name: $name}) RETURN a", { name: personName });

// Get

app.listen(port, () => console.log(`Listening on port ${port}`));

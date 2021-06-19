const express = require("express");
const hbs = require("express-handlebars");

const app = express();

app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    name: "Yagizhan Avci",
    isDisplayName: true,
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    title: "Dashboard Page",
    isListEnabled: false,
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contacts Page",
    people: ["James", "Joe", "Jane", "Joana"],
    user: {
      name: "Yagizhan",
      age: 24,
      phone: "123123123",
    },
    list: [
      {
        items: ["James", "Joe", "Jane", "Joana"],
      },
      {
        items: ["James", "Joe", "Jane", "Joana"],
      },
      {
        items: ["James", "Joe", "Jane", "Joana"],
      },
    ],
  });
});

app.get("/lookup", (req, res) => {
  res.render("lookup", {
    title: "Lookup Page",
  });
});

app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});

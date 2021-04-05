import express from 'express';

const app = express();
const port = 4000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/foo", function (req, res) {
  res.json({ foo: "bar" });
});

app.post("/bar", function (req, res) {
  const body = req.body;
  console.log(req.body.foo);
  res.send(req.body.foo);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
const { productSchema } = require("./schemas/productSchema");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

// middlewares
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@myclaster-1.wxhqp81.mongodb.net/?retryWrites=true&w=majority&appName=MyClaster-1`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const db = client.db("mahlunbd_expenseMahlun");
    const productCollection = db.collection("products");

    app.get("/", (req, res) => {
      res.send("Hello Dev, your server is running!");
    });

    //insert to db
    app.post("/create-product", async (req, res) => {
      //validate
      const product = await productSchema.validate(req.body, {
        abortEarly: false,
      });
      const result = await productCollection.insertOne(product);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

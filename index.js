const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const { productSchema } = require("./productSchema");
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
    const db = client.db("githubTask");
    const productCollection = db.collection("products");

    app.get("/", (req, res) => {
      res.send("Hello Dev, your server is running!");
    });

    //insert to db
    app.post("/products/create", async (req, res) => {
      //validate
      const product = await productSchema.validate(req.body, {
        abortEarly: false,
      });
      const result = await productCollection.insertOne(product);
      res.status(200).send({
        error: false,
        message: "Product created successfully",
        data: result,
      });
    });

    //get all to db
    app.get("/products", async (req, res) => {
      const result = await productCollection.find().toArray();
      res.status(200).send({
        error: false,
        message: "Product fetched successfully",
        data: result,
      });
    });

    // get a specific product details
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const productData = await productCollection.findOne({
        _id: new ObjectId(id),
      });
      res.status(200).send({
        error: false,
        message: "Product fetched successfully",
        data: productData,
      });
    });

    //edit an products
    app.patch("/products/:id", async (req, res) => {
      const updateData = req.body;
      const id = req.params.id;

      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: updateData,
      };

      const result = await productCollection.updateOne(filter, updatedDoc);
      console.log(result, "result");
      if (result.matchedCount > 0) {
        res.send({
          error: false,
          data: result,
          message: "Products updated successfully!",
        });
      } else {
        res.status(404).send({
          error: true,
          message: "Products not found",
        });
      }
    });

    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };
      const result = await productCollection.deleteOne(query);

      if (result.deletedCount > 0) {
        res.send({
          error: false,
          message: "Products deleted successfully!",
          result: result,
        });
      } else {
        res.status(404).send({
          error: true,
          message: "Products not found",
        });
      }
    });
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import express from "express";
const app = express();
import { json, urlencoded } from "body-parser";
import path from "path";
import { productRouter } from './routes/product';
import cors from "cors";

// BodyParser Middleware
app.use(urlencoded({ extended: false, limit: "10mb" }));
app.use(json({ limit: "10mb" }));

app.use(cors());

app.get("/api", async (req, res) => {
  res.send("Server working for W.W !");
});

app.use('/api/product', productRouter);


console.log(process.env.NODE_ENV, 'node env prod')
if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });
  }

export { app };

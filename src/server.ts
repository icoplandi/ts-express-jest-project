import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from TypeScript + Express!");
});

export default app;

if (require.main === module) {
  app.listen(3000, () => console.log("Server running on port 3000"));
}

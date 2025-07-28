import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.express.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});

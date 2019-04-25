const { app } = require("./server");
require("dotenv").config();
const PORT = process.env.PORT || 4000;

async function run() {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

run();

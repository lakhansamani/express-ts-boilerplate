import 'dotenv-safe/config'
import express from 'express';

const main = async () => {
  // create express app
  const app = express();

  // bind add to local port and start server
  const port = parseInt(process.env.PORT || '3000', 10);
  app.listen(port, () => {
    console.log(`🚀 server started on ${port}`);
  });
};

main();

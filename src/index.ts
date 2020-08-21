import 'dotenv-safe/config';
import express from 'express';
import cors from 'cors';

const main = async () => {
  // create express app
  const app = express();

  // add cors middleware
  app.use(cors());

  // bind add to local port and start server
  const port = parseInt(process.env.PORT || '3000', 10);
  app.listen(port, () => {
    console.log(`🚀 server started on ${port}`);
  });
};

main();

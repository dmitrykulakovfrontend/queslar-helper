import app from "./app";
import { connectDatabase } from "./db/connectDatabase";

const port = process.env.PORT || 5000;
app.listen(port, async () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  console.log(`connecting to database...`);
  try {
    await connectDatabase();
    console.log(`Database connected`);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
  /* eslint-enable no-console */
});


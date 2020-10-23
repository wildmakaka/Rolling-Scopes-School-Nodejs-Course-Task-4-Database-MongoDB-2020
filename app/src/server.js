const mongoose = require('mongoose');
const { PORT, MONGO_CONNECTION_STRING } = require('./common/config');
const app = require('./app');

mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', () => console.Console.og('MongoDB connection error!')).once(
  'open',
  () => {
    console.log('Successfully connect to MongoDB!');
    app.listen(PORT, () =>
      console.log(`App is running on http://localhost:${PORT}`)
    );
  }
);

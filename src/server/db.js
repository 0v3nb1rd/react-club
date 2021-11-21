// const mongoose = require('mongoose');

// const DB_URI =
//   'mongodb+srv://nazar:12345@react.avpd4.mongodb.net/store?retryWrites=true&w=majority';

// const connectDB = async () => {
//   let connection = null;

//   try {
//     await mongoose.connect(DB_URI);
//     // .then((res) => app.listen(PORT))
//     // .catch((err) => console.log(err.message));

//     // mongoose.set('useNewUrlParser', true);
//     // mongoose.set('useUnifiedTopology', true);
//     // mongoose.set('useCreateIndex', true);
//     // mongoose.set('useFindAndModify', true);

//     // await mongoose.connect(DB_URI);
//     connection = await mongoose.createConnection(MONGO_URL);

//     logger.log({ level: 'notice', message: 'MongoDB Connected...' });
//   } catch (err) {
//     logger.error(JSON.stringify({ key: 'Mongodb', value: err.message }));
//   }

//   return connection;
// };

// module.exports = connectDB;

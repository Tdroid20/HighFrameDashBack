import mongoose from 'mongoose';

let connectDB = process.env.DB!


mongoose
  .connect(connectDB)
  .then(() => console.log('Connected to Database'))
  .catch((err) => console.log(err));
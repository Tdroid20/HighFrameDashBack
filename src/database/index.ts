import mongoose from 'mongoose';

mongoose
  .connect(process.env.DB)
  .then(() => console.log('Connected to Database'))
  .catch((err) => console.log(err));
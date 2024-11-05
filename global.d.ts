import { Mongoose } from 'mongoose';

// Define the interface for the cached Mongoose connection.
interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Extend the NodeJS Global interface to include mongoose.
declare global {
  namespace NodeJS {
    interface Global {
      mongoose: MongooseConnection;
    }
  }
}

export {};

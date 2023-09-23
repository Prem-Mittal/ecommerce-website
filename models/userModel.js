import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
export default mongoose.model("users", userSchema);
//mongoose.model: This is a method provided by the Mongoose library. It is used to define a new model or retrieve an existing model from the Mongoose registry
//'users': The first argument to mongoose.model is a string representing the name of the collection (or table) in the database that the model corresponds to. In this case, the collection name is 'users'.
//userSchema: The second argument to mongoose.model is the schema definition for the model. A schema is a blueprint that defines the structure and validation rules for documents stored in a MongoDB collection. The userSchema variable represents the schema definition for the user model.

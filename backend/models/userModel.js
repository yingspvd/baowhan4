/*******************************************************************************
 * This file is the structure of the users's collection
 ******************************************************************************/

import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  blood: { type: String },
  number: { type: Number },
});

const User = mongoose.model("User", userSchema);

export default User;

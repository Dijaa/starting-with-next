import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export interface User extends mongoose.Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: [true, "Please provide a name for your user."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  
  email: {
    type: String,
    required: [true, "Please provide a email for your user"],
    maxlength: [60, "Email cannot be more than 60 characters"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password for your user"],
    maxlength: [60, "Password cannot be more than 60 characters"],
  }, 
});

  UserSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  });

const User = mongoose.model<User>("User", UserSchema);

export default User;

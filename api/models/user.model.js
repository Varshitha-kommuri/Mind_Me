import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
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
    },
    {timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;

//In this userschema we need to add user associated journals and to-do lists
import mongoose, { Schema, Document, Model } from "mongoose";
import isEmail from "validator/lib/isEmail";
import bcrypt from "bcrypt";

interface IUser {
  pseudo: string;
  firstName: string;
  lastName: string;
  email: string;
  adresse: string;
  latitude: number;
  longitude: number;
  password: string;
  picture: string;
  bio: string;
  friendRequestSend: [string];
  friendRequestReceived: [string];
  friends: [string];
  hobbies: [string];
  isAdmin: boolean;
  userInterestedIn: [string];
}

interface IUserDocument extends IUser, Document { }

interface IUserModel extends Model<IUserDocument> {
  login: (email: string, password: string) => Promise<IUserDocument>;
}

const userSchema: Schema<IUserDocument> = new Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
      unique: true,
      trim: true,
    },
    firstName: {
      type: String,
      minlength: 2,
      maxlength: 55,
    },
    lastName: {
      type: String,
      minlength: 2,
      maxlength: 55,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trim: true,
    },
    adresse: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 120,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6,
    },
    latitude: {
      type: Number
    },
    longitude: {
      type: Number
    },
    picture: {
      type: String,
      default: "./uploads/profil/random-user.png",
    },
    bio: {
      type: String,
      max: 1024,
    },
    friendRequestSend:{
      type: [String],
    },
    friendRequestReceived:{
      type: [String],
    },
    friends: {
      type: [String],
    },
    hobbies: {
      type: [String],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    userInterestedIn: {
      type: [String],
    }
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email: string, password: string) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const UserModel = mongoose.model<IUserDocument, IUserModel>("user", userSchema);

export default UserModel;

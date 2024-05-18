import mongoose, {Schema} from mongoose;
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
{
  username:{
    type: String,
    require: true,
    unique: true,
    lowecase: true,
    trim: true,
    index: true
  },
  email:{
    type: String,
    require: true,
    unique: true,
    lowecase: true,
    trim: true,
  },
  fullname:{
    type: String,
    require: true,
    trim: true,
    index: true
  },
  avatar:{
    type: String, // cloudinary url
    require: true,
    unique: true,
  },
  coverImage:{
    type: String,
  },
  watchHistory:[
    {
      type: Schema.Types.ObjectId,
      ref: "Video"
    }
  ],
  password:{
    type: String,
    require: [true, 'Password is reuired'],
  },
  refreshToken:{
    type: String,
  }
},{
  timestamps: true,
}
)


userSchema.pre("save", async function (next) {
  if(!this.isModified("password")) return next();

  this.password = bcrypt.hash(this.password, 10)
  next()
})

userSchema.methods.isPasswordCorrect = async function (password){
  return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)
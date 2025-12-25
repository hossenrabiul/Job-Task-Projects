
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserSchema } from "../../models/UserSchema.model";
const createUser = async (body: Record<string, unknown>) => {
  const { name, email, password, role } = body;
  // console.log(body)
  const hashPass = await bcrypt.hash(password as string, 10);

  const findUser = await UserSchema.findOne({ email: email });
  if (findUser) {
    throw new Error("User already exist");
  }
  const obj: Record<string, unknown> = {
    name: name,
    email: email,
    password: hashPass,
    role: role,
  };
  const user = await UserSchema.create(obj);
  return user;
};

const signIn = async (email: string, password: string) => {
  const user = await UserSchema.findOne({ email: email });
  if (!user) {
    throw new Error("No user found!");
  }

  const validatePass = await bcrypt.compare(password, user.password);
  if (!validatePass) {
    throw new Error("did not match credentials!");
  }
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
  };
  const secret_key = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secret_key!, { expiresIn: "6hr" });
  return { user, token };
};
export const authServices = {
  createUser,
  signIn,
};

import { Auth } from "../interfaces/auth"
import { User } from "../interfaces/user"
import userModel from "../models/user";
import { encrypt, verified } from "../utils/bcryptHandle"
import { generateToken } from "../utils/jwtHandle";

const registerService = async ({ email, password, name }: User) => {
  const checkIs = await userModel.findOne({ email });
  if (checkIs) return "ALREADY_USER";
  const passHash = await encrypt(password);
  const registerNewUser = await userModel.create({
    email,
    password: passHash,
    name,
  });
  return registerNewUser;
};

const loginService = async ({ email, password }: Auth) => {
  const userExists = await userModel.findOne({ email })
  if (!userExists) return console.log("El usuario no existe")

  const passwordHashed = userExists.password
  const isValid = await verified(password, passwordHashed)
  if (!isValid) return console.log("Contraseña incorrecta")
  const token = generateToken(userExists.email)
  const data = {
    token,
    user: userExists
  }
  return data
}

export { registerService, loginService }
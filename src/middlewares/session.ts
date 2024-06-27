import { NextFunction, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";
import { verifyToken } from "../utils/jwtHandle";

export interface RequestExt extends Request {
  user?: JwtPayload | { id: string };
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`) as { id: string };
    if (!isUser) {
      console.log(isUser)
      res.status(401);
      res.send("NO_TIENES_UN_JWT_VALIDO");
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    res.status(400);
    res.send("SESSION_NO_VALIDAD");
  }
};

export { checkJwt }
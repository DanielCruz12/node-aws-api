
import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

export interface Storage {
    fileName: string
    path: string
    idUser: string
}
export interface RequestExt extends Request {
  user?: JwtPayload | { id: string };
}
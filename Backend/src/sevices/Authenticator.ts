import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../models/Client";

export class Authenticator {
  public static key = process.env.JWT_KEY as string;

  public generateToken = ({id}: AuthenticationData): string => {
    const token = jwt.sign(
      {id},
      Authenticator.key,
      {expiresIn: "24h"}
    );
    return token;
  };

  public getTokenData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, Authenticator.key) as AuthenticationData;
    return payload;
  };
};

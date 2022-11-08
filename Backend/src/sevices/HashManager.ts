import * as bcrypt from "bcryptjs";

export class HashManager {
  public async hash (plaintext: string): Promise<string> {
    const count = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(count);

    return bcrypt.hash(plaintext, salt);
  };

  public async compare (plaintext: string, cypherText: string): Promise<Boolean> {
    return bcrypt.compare(plaintext, cypherText);
  };
};
import prisma from "../config/db.js";

export class UserService {
  static async registerUser(
    email: string,
    name: string,
    password: string,
  ) {

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new Error("Email address is already linked to an account");
    }

    // 2. Data Insertion rule: Save the new user into the PostgreSQL table
    // (Note: In a later security module, we will hash this password!)
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: password,
      },
    });

    return newUser;
  }

  static async loginUser(
    email: string,
    password: string,
  ) {
    
    // check database for email
    

    // if password for that specific email is the same as password in the email in the database, log-in user

    


  }

  static async getUsers(){
    return await prisma.user.findMany();
  }
}

import NextAuth, { CredentialsSignin } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import UserModel from "./models/user.model"
import bcrypt from "bcryptjs"


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        CredentialsProvider({
            authorize: async ({ email, password }) => {
                if (typeof email !== "string"|| typeof password !=="string") throw new CredentialsSignin("Invalid email or password");
               
                const user = await UserModel.findOne({email}).select("+password");

                if(!user) throw new CredentialsSignin("User not found");

                if(!user.password) throw new CredentialsSignin("You did not signup using this method");
                
                const passwordMatched = await bcrypt.compare(password,user.password);
               
                if(!passwordMatched) throw new CredentialsSignin("Email or password is incorrect");
                
                
                return { email };
            }
        }),
      
    ],
    session:{
       strategy:"jwt"
    },
    callbacks: {
        async signIn({ user, account, credentials }) {
            
           
            if(account?.provider==="credentials"){
                const currUser = await UserModel.findOne({ email: credentials?.email });
                if(!currUser){
                    throw new Error("You have not registered");
                }
            }
           
            const currUser = await UserModel.findOne({email:user.email});

            if(!currUser){
               await fetch("/api/register",{method:"POST",body:JSON.stringify({email:user.email,registerMethod:account?.provider})});
            }

            return true;
        },
    }
})


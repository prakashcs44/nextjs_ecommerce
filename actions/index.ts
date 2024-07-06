"use server"

import { signIn, signOut } from "@/auth";




export const socialLogin = async (formData:FormData)=>{
    const provider = formData.get("action") as string;
    await signIn(provider,{redirectTo:"/"});
}

export const credentialsLogin = async (formData:FormData)=>{
    formData.append("redirectTo","/");
    await signIn("credentials",formData);
    
}

export const logout = async ()=>{
     await signOut({redirectTo:"/signin"});
}
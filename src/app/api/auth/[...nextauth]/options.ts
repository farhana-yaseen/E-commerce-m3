import type { NextAuthOptions } from "next-auth";
import GithupProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";

export const options:NextAuthOptions = {
    providers:[

        GithupProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret:process.env.GITHUB_SECRET!,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name:"Credentials",
            credentials: {
                username:{
                    label: "Username",
                    type: "text",
                    placeholder: "Enter your username"
                    },
                password:{
                    label: "Password",
                    type: "password",
                    placeholder: "Enter your password"
                    },
            },
            async authorize(credentials){
                const user = {id:"1001", name:"zuni", password:"123"}

                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user
                }else{
                    return null
                }
            }
        })
        

    ]

}


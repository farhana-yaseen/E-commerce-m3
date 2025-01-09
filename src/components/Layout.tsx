
"use client"
import { ContextProvider } from "@/app/ContextProvider";
import { SessionProvider } from "next-auth/react"


type Props={
  children?:React.ReactNode;
  
}

const Layout = ({ children }: Props) => {
  

  return (
    <div>
      <SessionProvider>
        <ContextProvider>
          {children}
        </ContextProvider>
      </SessionProvider>

    </div>
  )
}

export default Layout

"use client"
import { createContext} from "react";
import { CartContextType } from "./ContextProvider";



// Cart Context
export const Context = createContext<CartContextType | undefined>(undefined);


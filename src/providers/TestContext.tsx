"use client";

import { ReactNode, createContext, useState } from "react";
 
interface ITestProviderPros {
  children: ReactNode;
}
interface IContext{
  teste: string
}
export const TestContext = createContext({} as IContext);


export default function TestProvider({ children }: ITestProviderPros) {
  const [teste, setTeste] = useState("olá");

  return (
    <TestContext.Provider value={{ teste }}>{children}</TestContext.Provider>
  );
}
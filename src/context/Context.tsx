import React, { createContext } from "react";
import { PropsContext } from "./types/contextProps";

export const ContextKuepa = createContext<PropsContext>({} as PropsContext);

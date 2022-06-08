import React from "react";
import { ProviderProps } from "./types/providesProps";
import { ContextKuepa } from "./Context";
import { useUsers } from "../hooks/useUsers";

export const Provider = ({ children }: ProviderProps) => {
  const { users, isLoadingUsers } = useUsers();

  return (
    <ContextKuepa.Provider value={{ users, isLoadingUsers }}>
      {children}
    </ContextKuepa.Provider>
  );
};

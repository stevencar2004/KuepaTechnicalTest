import React, { useState, useEffect } from "react";
import { GetUserAPI } from "../api/GetUserAPI";

export const useGetUser = (id: number) => {
  const [user, setUser] = useState<any>([]);
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);

  useEffect(() => {
    GetUserAPI(id).then((data) => {
      setUser(data.data);
      setIsLoadingUser(false);
    });
  }, [id]);

  return { user, isLoadingUser };
};

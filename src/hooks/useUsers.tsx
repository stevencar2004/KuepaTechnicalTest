import React, { useState, useEffect } from "react";

import { UsersAPI } from "../api/UsersAPI";
import { ResponseAPI } from "../shared/types/responseAPI";

export const useUsers = () => {
  const [users, setUsers] = useState<Array<ResponseAPI>>([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState<boolean>(true);

  useEffect(() => {
    UsersAPI().then((data) => {
      setUsers(data.data.slice(0, 100));
      setIsLoadingUsers(false);
    });
  }, []);

  return { users, isLoadingUsers };
};

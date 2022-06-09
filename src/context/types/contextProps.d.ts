import { ResponseAPI } from "../../shared/types/responseAPI";

export type PropsContext = {
  users: Array<ResponseAPI>;
  isLoadingUsers: boolean;
};

import axios from "axios";
import { ResponseAPI_GetUser } from "../shared/types/responseAPI_User";

export const GetUserAPI = (id: number) => {
  return axios.get<ResponseAPI_GetUser>(`https://api.opendota.com/api/players/${id}`);
};

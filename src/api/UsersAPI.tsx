import axios from "axios";
import { ResponseAPI } from "../shared/types/responseAPI";

export const UsersAPI = () => {
  return axios.get<Array<ResponseAPI>>("https://api.opendota.com/api/proPlayers");
};

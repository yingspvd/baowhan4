/*******************************************************************************
 * This file is the path that connect to users's collection in the database
 ******************************************************************************/
import http from "./http-common";

class UserAPI {
  register = (data) => {
    return http.post("/user/register", data);
  };
  getData = () => {
    return http.get("/user/getData");
  };
}

export default new UserAPI();

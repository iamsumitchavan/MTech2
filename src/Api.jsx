import axios from "axios";

export const getUserList = async (uname) => {
  return await axios
    .get(" https://api.github.com/users/" + uname)
    .then((response) => {
      return response;
    });
};

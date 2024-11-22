import axios from "axios";

const baseUrl = "https://dummyjson.com";

export const getUsers = () => {
  return axios
    .get(baseUrl + "/users")
    .then(({ data }) => {
      console.log("getUsers", data);

      return data;
    })
    .catch((e) => console.assertlog(e));
};

// Bonus:
export const deleteUser = (id) => {
  return axios
    .delete(`${baseUrl}/users/${id}`)
    .then(() => {
      console.log(`User with id ${id} deleted`);
    })
    .catch((e) => {
      console.error("Error deleting user:", e);
      throw e;
    });
};

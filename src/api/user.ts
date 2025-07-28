import axiosWithAuth from "./client";

export const fetchUserIdentities = async () => {
  const response = await axiosWithAuth.get("/user/identity");
  return response.data.users;
};

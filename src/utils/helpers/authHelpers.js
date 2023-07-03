export const getAdminToken = () => {
  return JSON.parse(localStorage.getItem("loggedIsdin"))?.token;
};

export const logout = () => {
  localStorage.clear();
};

export const isTokenExpired = (error) => {
  const { response } = error;
  if (response) {
    if (response.status === 401) {
      logout();
    }
    return Promise.reject(error);
  }
};

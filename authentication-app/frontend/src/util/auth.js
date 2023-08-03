export const getAuthToken = () => {
  return localStorage.getItem('token');
};

export const tokenLoader = () => {
  return getAuthToken();
};

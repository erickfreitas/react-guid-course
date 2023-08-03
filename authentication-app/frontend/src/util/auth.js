import { redirect } from 'react-router-dom';

export const getAuthToken = () => {
  return localStorage.getItem('token');
};

export const tokenLoader = () => {
  return getAuthToken();
};

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth');
  }

  return null;
};

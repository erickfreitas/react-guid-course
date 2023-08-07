import { redirect } from 'react-router-dom';

export const action = async ({ request }) => {
  localStorage.removeItem('token');
  localStorage.removeItem('expiration');
  return redirect('/');
};

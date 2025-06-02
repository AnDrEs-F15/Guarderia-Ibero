import api from './ApiConfig';

export const postParent = (body) => {
  return api.post('/api/attendant', body).then((res) => res.data);
};

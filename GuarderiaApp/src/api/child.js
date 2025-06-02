import api from './ApiConfig';

export const postChild = (body) => {
  return api.post('/api/child', body).then((res) => res.data);
};

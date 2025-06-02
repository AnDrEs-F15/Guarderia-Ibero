import api from './ApiConfig';

export const getProfessor = () => {
  return api.get('/api/professor').then((res) => res?.data);
};

export const postProfessor = (body) => {
  console.log('Send');
  return api.post('/api/professor', body).then((res) => res?.data);
};

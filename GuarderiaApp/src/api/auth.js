import api from './ApiConfig';

export const postAuthRegister = (body) => {
  console.log('API');
  return api
    .post('/authentication', {
      documentId: body.documentId,
      password: body.password,
      fullName: `${body.firstName} ${body.lastName}`
    })
    .then((res) => res.data);
};

export const postAuthLogin = (body) => {
  return api.post('/authentication/login', body).then((res) => res.data);
};

import api from './ApiConfig';

export const getCourse = () => {
  return api.get('/api/course').then((res) => res?.data);
};

export const getCourseActive = () => {
  return api.get('/api/course/active').then((res) => res.data);
};

export const postCourse = (body) => {
  return api.post(`/api/course`, body).then((res) => res?.data);
};

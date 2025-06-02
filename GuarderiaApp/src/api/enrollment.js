import api from './ApiConfig';

export const postEnrollment = (body) => {
  return api.post(`/api/enrollment`, body).then((res) => res?.data);
};

export const getAllEnrollment = () => {
  return api.get(`/api/enrollment`).then((res) => res?.data);
};

export const getAllEnrollmentById = (id) => {
  return api.get(`/api/enrollment/${id}`).then((res) => res?.data);
};

export const patchEnrollmentStatus = ({ id, status }) => {
  return api.patch(`/api/enrollment/${id}/${status}`).then((res) => res?.data);
};

export const getAllStudentsByCourse = (courseId) => {
  console.log(courseId);
  return api.get(`/api/enrollment/${courseId}/students`).then((res) => res?.data);
};

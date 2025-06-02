import { useQuery } from '@tanstack/react-query';
import { getCourse } from '../../../api/course';

export const useCourseApi = () => {
  const fetchAllCourses = useQuery({
    queryKey: ['fetchAllCourse'],
    queryFn: getCourse
  });
  
  return { fetchAllCourses };
};

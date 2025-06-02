import { useQuery } from "@tanstack/react-query";
import { getProfessor } from "../../../api/professor";

export const useProfessorApi = () => {
  const fetchAllProfessor = useQuery({
    queryKey: ['fetchAllProfessor'],
    queryFn: getProfessor
  });

  
  return {fetchAllProfessor};
};

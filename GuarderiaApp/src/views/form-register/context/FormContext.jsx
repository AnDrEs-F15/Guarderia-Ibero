import { createContext, useContext, useState } from 'react';
const FormContext = createContext();
export const FormContextProvider = ({ children }) => {
  const [childId, setChildId] = useState(null);
  const [parentId, setParentId] = useState(null);
  return <FormContext.Provider value={{ childId, setChildId, parentId, setParentId }}>{children}</FormContext.Provider>;
};
export const useAppFormContext = () => useContext(FormContext);

import { createContext, useState } from 'react';

export const MeContext = createContext();

export const MeContextProvider = ({ children }) => {
  const [meInfo, setMeInfo] = useState(null);
  return (
    <MeContext.Provider value={[meInfo, setMeInfo]}>
      {children}
    </MeContext.Provider>
  );
};

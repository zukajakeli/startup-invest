import { createContext, useState } from 'react';

export const AuthProblemContext = createContext();

export const AuthProblemProvider = ({ children }) => {
  const [isAuthorizationOpen, setIsAuthorizationOpen] = useState(true);
  return (
    <AuthProblemContext.Provider
      value={[isAuthorizationOpen, setIsAuthorizationOpen]}
    >
      {children}
    </AuthProblemContext.Provider>
  );
};

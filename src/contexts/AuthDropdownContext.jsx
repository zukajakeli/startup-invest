import { createContext, useState } from 'react';

export const AuthDropdownContext = createContext();

export const AuthDropdownProvider = ({ children }) => {
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);
  return (
    <AuthDropdownContext.Provider
      value={[isAuthDropdownOpen, setIsAuthDropdownOpen]}
    >
      {children}
    </AuthDropdownContext.Provider>
  );
};

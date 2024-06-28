import { createContext, useState } from 'react';

const BackFromDetailContext = createContext();

const BackFromDetailContextProvider = ({ children }) => {
  const [backFromDetail, setBackFromDetail] = useState('');

  return (
    <BackFromDetailContext.Provider
      value={{ backFromDetail, setBackFromDetail }}
    >
      {children}
    </BackFromDetailContext.Provider>
  );
};

export const BackFromDetail = BackFromDetailContext;
export default BackFromDetailContextProvider;

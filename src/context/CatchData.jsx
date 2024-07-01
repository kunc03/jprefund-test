import { createContext, useState } from 'react';

const CatchDataContext = createContext();

const CatchDataContextProvider = ({ children }) => {
  const [catchData, setCatchData] = useState('');

  return (
    <CatchDataContext.Provider value={{ catchData, setCatchData }}>
      {children}
    </CatchDataContext.Provider>
  );
};

export const CatchData = CatchDataContext;
export default CatchDataContextProvider;

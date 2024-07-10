import { createContext, useState, useMemo } from 'react';

const CatchDataContext = createContext();

const CatchDataContextProvider = ({ children }) => {
  const [catchData, setCatchData] = useState('');

  const value = useMemo(() => ({ catchData, setCatchData }), [catchData]);

  return (
    <CatchDataContext.Provider value={value}>
      {children}
    </CatchDataContext.Provider>
  );
};

export const CatchData = CatchDataContext;
export default CatchDataContextProvider;
